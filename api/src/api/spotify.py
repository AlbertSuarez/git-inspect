from src import *
from src.helper import response
from src.nlp import nltk
from src.services import spotify_api, github_api


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

    # Playlist generation
    playlist_id, playlist_url = spotify_api.post_playlist(access_token, user_id, github_user)
    if not playlist_id and not playlist_url:
        return response.make(error=True, message=MESSAGE_SPOTIFY_PLAYLIST_ERROR)

    # Retrieve commits from user
    commit_messages = github_api.get_commit_messages(github_user)
    if not commit_messages:
        return response.make(error=True, message=MESSAGE_COMMIT_NOT_FOUND)

    # Retrieve most common words
    most_common_words = nltk.extract_most_common(commit_messages)

    # Search for tracks
    track_uri_list = set()
    for word in most_common_words:
        track_uri = spotify_api.search_for_tracks(access_token, word)
        if track_uri:
            track_uri_list.add(track_uri)
    track_uri_list = list(track_uri_list)

    return response.make(error=False, response=dict(url=playlist_url))
