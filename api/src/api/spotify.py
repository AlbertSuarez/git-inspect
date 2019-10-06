from src import *
from src.helper import response
from src.services import spotify_api


def login():
    auth_url = spotify_api.get_auth_url()
    return response.make(error=False, response=dict(redirect=auth_url))


def playlist(code, github_user):
    # Request token retrieving
    access_token = spotify_api.get_access_token(code)
    if not access_token:
        return response.make(error=True, message=MESSAGE_TOKEN_NOT_FOUND)

    # Get profile data
    user_id = spotify_api.get_current_user_id(access_token)
    if not user_id:
        return response.make(error=True, message=MESSAGE_SPOTIFY_NOT_FOUND)

    return response.make(error=False, response=dict(id=user_id))
