import requests

from src import *
from src.helper import log


def get_basic_user_information(username):
    for attempt in range(0, GITHUB_API_RETRIES):
        try:
            endpoint = f'{GITHUB_SINGLE_USER_ENDPOINT}/{username}'
            response = requests.get(endpoint, timeout=GITHUB_API_TIMEOUT)
            if response.ok:
                response = response.json()
                return response
        except Exception as e:
            if attempt < GITHUB_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_basic_user_information.__name__} function. [{e}]')
    return None
