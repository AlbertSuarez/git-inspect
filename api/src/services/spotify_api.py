from urllib.parse import quote

import requests

from src import *
from src.helper import env, response, log


def get_auth_url():
    auth_query_parameters = dict(
        response_type=SPOTIFY_RESPONSE_TYPE,
        redirect_uri=SPOTIFY_REDIRECT_URI,
        scope=SPOTIFY_SCOPES,
        client_id=env.get_spotify_client_id()
    )
    url_args = '&'.join(['{}={}'.format(key, quote(val)) for key, val in auth_query_parameters.items()])
    auth_url = '{}/?{}'.format(SPOTIFY_API_LOGIN_URL, url_args)
    return auth_url


def get_access_token(code):
    for attempt in range(0, SPOTIFY_API_RETRIES):
        try:
            code_payload = {
                'grant_type': 'authorization_code',
                'code': str(code),
                'redirect_uri': SPOTIFY_REDIRECT_URI,
                'client_id': env.get_spotify_client_id(),
                'client_secret': env.get_spotify_client_secret(),
            }
            post_request = requests.post(SPOTIFY_API_TOKEN_URL, data=code_payload)
            if post_request.ok:
                post_request = post_request.json()
                return response.get('access_token', post_request)
        except Exception as e:
            if attempt < SPOTIFY_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_access_token.__name__} function. [{e}]')
    return None


def get_current_user_id(access_token):
    for attempt in range(0, SPOTIFY_API_RETRIES):
        try:
            authorization_header = {'Authorization': f'Bearer {access_token}'}
            profile_response = requests.get(SPOTIFY_API_CURRENT_USER, headers=authorization_header)
            if profile_response.ok:
                profile_response = profile_response.json()
                return response.get('id', profile_response)
        except Exception as e:
            if attempt < SPOTIFY_API_RETRIES - 1:
                log.warn(f'Attempt number {attempt}: Failed - [{e}]. Retrying...')
            else:
                log.error(f'Error in {get_current_user_id.__name__} function. [{e}]')
    return None
