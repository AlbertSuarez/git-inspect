from src import *
from src.helper import response, formatter
from src.services import github


def get(github_user):
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

    # Languages & topics
    resp['languages'] = {}
    resp['topics'] = {}
    for repo in repos_list:
        repo_name = response.get('name', repo)
        if repo_name:
            language_response = github.get_languages(github_user, repo_name)
            topic_response = github.get_topics(github_user, repo_name)
            if language_response:
                for key, value in language_response.items():
                    if key not in resp['languages']:
                        resp['languages'][key] = dict(characters=0)
                    resp['languages'][key]['characters'] += value
            if topic_response:
                for topic in topic_response:
                    if topic not in resp['topics']:
                        resp['topics'][topic] = dict(amount=0)
                    resp['topics'][topic]['amount'] += 1

    return response.make(error=False, response=resp)
