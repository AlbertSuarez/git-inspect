from urllib.parse import quote

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
    pass
