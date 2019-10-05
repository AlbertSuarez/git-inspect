import requests

from src import *
from src.helper import log, env


def get_basic_user_information(username):
    for attempt in range(0, GITHUB_API_RETRIES):
        try:
            endpoint = GITHUB_SINGLE_USER_ENDPOINT.format(username=username)
            params = dict(client_id=env.get_github_client_id(), client_secret=env.get_github_client_secret())
            response = requests.get(endpoint, params=params, timeout=GITHUB_API_TIMEOUT)
            if response.ok:
                response = response.json()
                return response
        except Exception as e:
            if attempt < GITHUB_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_basic_user_information.__name__} function. [{e}]')
    return None


def get_repos_from_user(username):
    repos_array = []
    page_number = 1
    while True:
        for attempt in range(0, GITHUB_API_RETRIES):
            try:
                endpoint = GITHUB_USER_REPOS_ENDPOINT.format(username=username)
                params = dict(client_id=env.get_github_client_id(), client_secret=env.get_github_client_secret(), page=page_number)
                response = requests.get(endpoint, params=params, timeout=GITHUB_API_TIMEOUT)
                if response.ok:
                    response = response.json()
                    if response:
                        repos_array.extend(response)
                        break
                    else:
                        return repos_array
            except Exception as e:
                if attempt < GITHUB_API_RETRIES - 1:
                    log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
                else:
                    log.error(f'Error in {get_repos_from_user.__name__} function. [{e}]')
                    return None
        page_number += 1


def get_languages(username, repository):
    for attempt in range(0, GITHUB_API_RETRIES):
        try:
            endpoint = GITHUB_LANGUAGES_ENDPOINT.format(username=username, repository=repository)
            params = dict(client_id=env.get_github_client_id(), client_secret=env.get_github_client_secret())
            response = requests.get(endpoint, params=params, timeout=GITHUB_API_TIMEOUT)
            if response.ok:
                response = response.json()
                return response
        except Exception as e:
            if attempt < GITHUB_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_languages.__name__} function. [{e}]')
    return None


def get_topics(username, repository):
    for attempt in range(0, GITHUB_API_RETRIES):
        try:
            endpoint = GITHUB_TOPICS_ENDPOINT.format(username=username, repository=repository)
            params = dict(client_id=env.get_github_client_id(), client_secret=env.get_github_client_secret())
            headers = dict(Accept='application/vnd.github.mercy-preview+json')
            response = requests.get(endpoint, params=params, headers=headers, timeout=GITHUB_API_TIMEOUT)
            if response.ok:
                response = response.json()['names']
                return response
        except Exception as e:
            if attempt < GITHUB_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_topics.__name__} function. [{e}]')
    return None


def get_contributors(username, repository):
    for attempt in range(0, GITHUB_API_RETRIES):
        try:
            endpoint = GITHUB_CONTRIBUTORS_ENDPOINT.format(username=username, repository=repository)
            params = dict(client_id=env.get_github_client_id(), client_secret=env.get_github_client_secret())
            response = requests.get(endpoint, params=params, timeout=GITHUB_API_TIMEOUT)
            if response.ok:
                response = response.json()
                return response
        except Exception as e:
            if attempt < GITHUB_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_contributors.__name__} function. [{e}]')
    return None
