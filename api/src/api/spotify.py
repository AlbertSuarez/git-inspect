from urllib.parse import quote

import requests

from src import *
from src.helper import env, response


def login():
    auth_query_parameters = dict(
        response_type=SPOTIFY_RESPONSE_TYPE,
        redirect_uri=SPOTIFY_REDIRECT_URI,
        scope=SPOTIFY_SCOPES,
        client_id=env.get_spotify_client_id()
    )
    url_args = '&'.join(['{}={}'.format(key, quote(val)) for key, val in auth_query_parameters.items()])
    auth_url = '{}/?{}'.format(SPOTIFY_API_LOGIN_URL, url_args)
    return response.make(error=False, response=dict(redirect=auth_url))


def playlist(code, github_user):
    # Request token retrieving
    code_payload = {
        'grant_type': 'authorization_code',
        'code': str(code),
        'redirect_uri': SPOTIFY_REDIRECT_URI,
        'client_id': env.get_spotify_client_id(),
        'client_secret': env.get_spotify_client_secret(),
    }
    post_request = requests.post(SPOTIFY_API_TOKEN_URL, data=code_payload)
    if not post_request:
        return response.make(error=True, message=MESSAGE_TOKEN_NOT_FOUND)
    post_request = post_request.json()
    access_token = post_request['access_token']

    # Authorization header
    authorization_header = {'Authorization': f'Bearer {access_token}'}

    # Get profile data
    profile_response = requests.get(SPOTIFY_API_CURRENT_USER, headers=authorization_header)
    profile_response = profile_response.json()
    user_id = response.get('id', profile_response)
    if not user_id:
        return response.make(error=True, message=MESSAGE_TOKEN_NOT_FOUND)

    return response.make(error=False, response=dict(id=user_id))
