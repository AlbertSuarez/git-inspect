import operator

from src import *
from src.helper import response, formatter, log
from src.services import github


def get(github_user):
    try:
        # Initialize response dictionary
        resp = {}

        # Basic information
        basic_information = github.get_basic_user_information(github_user)
        if not basic_information:
            return response.make(error=True, message=MESSAGE_USER_NOT_FOUND)
        resp['username'] = github_user
        resp['photo'] = response.get('avatar_url', basic_information)
        resp['public_repos'] = response.get('public_repos', basic_information)
        resp['public_gists'] = response.get('public_gists', basic_information)
        resp['followers'] = response.get('followers', basic_information)
        resp['following'] = response.get('following', basic_information)

        # Repositories
        repos_list = github.get_repos_from_user(github_user)
        if not repos_list:
            return response.make(error=True, message=MESSAGE_USER_NOT_FOUND)
        resp['repo_amount'] = len(repos_list)
        resp['repo_fork_amount'] = sum([response.get('fork', d, default=False) for d in repos_list])
        resp['repo_total_size'] = sum([response.get('size', d, default=0) for d in repos_list]) / 1000
        resp['repo_total_stars'] = sum([response.get('stargazers_count', d, default=0) for d in repos_list])
        resp['repo_total_forks'] = sum([response.get('forks_count', d, default=0) for d in repos_list])
        resp['repo_total_open_issues'] = sum([response.get('open_issues', d, default=0) for d in repos_list])
        resp['repo_avg_size'] = formatter.to_float(resp['repo_total_size'] / resp['repo_amount'])
        resp['repo_avg_stars'] = formatter.to_float(resp['repo_total_stars'] / resp['repo_amount'])
        resp['repo_avg_forks'] = formatter.to_float(resp['repo_total_forks'] / resp['repo_amount'])
        resp['repo_avg_open_issues'] = formatter.to_float(resp['repo_total_open_issues'] / resp['repo_amount'])

        # Languages & topics - amount
        languages_dict = {}
        topics_dict = {}
        for repo in repos_list:
            repo_name = response.get('name', repo)
            if repo_name:
                language_response = github.get_languages(github_user, repo_name)
                topic_response = github.get_topics(github_user, repo_name)
                if language_response:
                    for key, value in language_response.items():
                        if key not in languages_dict:
                            languages_dict[key] = 0
                        languages_dict[key] += value
                if topic_response:
                    for topic in topic_response:
                        if topic not in topics_dict:
                            topics_dict[topic] = 0
                        topics_dict[topic] += 1

        # Languages - percentage
        resp['languages'] = []
        total_languages = sum(languages_dict.values())
        sorted_languages = sorted(languages_dict.items(), key=operator.itemgetter(1), reverse=True)
        for idx in range(0, len(sorted_languages)):
            if idx < GITHUB_LANGUAGES_MAX:
                language_name, language_amount = sorted_languages[idx]
                percentage = formatter.to_float((language_amount / total_languages) * 100)
                resp['languages'].append(dict(label=language_name, amount=language_amount, percentage=percentage))
            else:
                language_amount = sum([v[1] for v in sorted_languages[GITHUB_LANGUAGES_MAX:]])
                percentage = formatter.to_float((language_amount / total_languages) * 100)
                resp['languages'].append(dict(label='Others', amount=language_amount, percentage=percentage))
                break

        # Topics - percentage
        resp['topics'] = []
        total_topics = sum(topics_dict.values())
        sorted_topics = sorted(topics_dict.items(), key=operator.itemgetter(1), reverse=True)
        for idx in range(0, len(sorted_topics)):
            if idx < GITHUB_TOPICS_MAX:
                topic_name, topic_amount = sorted_topics[idx]
                percentage = formatter.to_float((topic_amount / total_topics) * 100)
                resp['topics'].append(dict(label=topic_name, amount=topic_amount, percentage=percentage))
            else:
                topic_amount = sum([v[1] for v in sorted_topics[GITHUB_TOPICS_MAX:]])
                percentage = formatter.to_float((topic_amount / total_topics) * 100)
                resp['topics'].append(dict(label='others', amount=topic_amount, percentage=percentage))
                break

        # Contributors
        resp['commits'] = 0
        resp['commits_user'] = 0
        resp['commits_contributor'] = 0
        resp['contributors'] = {}
        for repo in repos_list:
            repo_name = response.get('name', repo)
            if repo_name:
                contributor_response = github.get_contributors(github_user, repo_name)
                for contributor in contributor_response:
                    contributor_name = response.get('login', contributor)
                    if contributor_name:
                        contributions = response.get('contributions', contributor, default=0)
                        resp['commits'] += contributions
                        if contributor_name == github_user:
                            resp['commits_user'] += contributions
                        else:
                            if contributor_name not in resp['contributors']:
                                resp['contributors'][contributor_name] = dict(
                                    commits=0,
                                    photo=response.get('avatar_url', contributor, default=''),
                                    url=response.get('html_url', contributor, default='')
                                )
                            resp['commits_contributor'] += contributions
                            resp['contributors'][contributor_name]['commits'] += contributions
        resp['commits_user_percentage'] = formatter.to_float((resp['commits_user'] / resp['commits']) * 100)
        resp['commits_contributor_percentage'] = formatter.to_float(
            (resp['commits_contributor'] / resp['commits']) * 100
        )

        return response.make(error=False, response=resp)

    except Exception as e:
        log.error(f'Exception while processing {get.__name__} function: [{e}]')
        log.exception(e)
        return response.make(error=True, message=MESSAGE_ERROR)
