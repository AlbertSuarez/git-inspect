from multiprocessing.dummy import Pool as ThreadPool

from src import *
from src.helper import response, log
from src.helper.timer import Timer
from src.nlp import nltk
from src.services import spotify_api, github_api


def login():
    try:
        with Timer('Get Auth URL'):
            auth_url = spotify_api.get_auth_url()
        return response.make(error=False, response=dict(redirect=auth_url))
    except Exception as e:
        log.error(f'Exception while processing {login.__name__} function: [{e}]')
        log.exception(e)
        return response.make(error=True, message=MESSAGE_ERROR)


def playlist(code, github_user):
    try:
        with Timer('Request token retrieving'):
            access_token = spotify_api.get_access_token(code)
            if not access_token:
                return response.make(error=True, message=MESSAGE_TOKEN_NOT_FOUND)

        with Timer('Get profile data'):
            user_id = spotify_api.get_current_user_id(access_token)
            if not user_id:
                return response.make(error=True, message=MESSAGE_SPOTIFY_NOT_FOUND)

        with Timer('Playlist generation'):
            playlist_id, playlist_url = spotify_api.post_playlist(access_token, user_id, github_user)
            if not playlist_id and not playlist_url:
                return response.make(error=True, message=MESSAGE_SPOTIFY_PLAYLIST_ERROR)

        with Timer('Retrieve commits from user'):
            commit_messages = github_api.get_commit_messages(github_user)
            if not commit_messages:
                return response.make(error=True, message=MESSAGE_COMMIT_NOT_FOUND)

        with Timer('Retrieve most common words'):
            most_common_words = nltk.extract_most_common(commit_messages)

        with Timer('Search for tracks'):
            with ThreadPool(CONCURRENT_POOL) as pool:
                thread_args = [(access_token, word) for word in most_common_words]
                track_uri_list = list(pool.imap(spotify_api.search_for_tracks, thread_args))
                track_uri_list = [t for t in track_uri_list if t]

        with Timer('Add tracks to the playlist'):
            success = spotify_api.add_tracks_to_playlist(access_token, playlist_id, track_uri_list)
            if not success:
                return response.make(error=True, message=MESSAGE_SPOTIFY_TRACK_ERROR)

        return response.make(error=False, response=dict(url=playlist_url))

    except Exception as e:
        log.error(f'Exception while processing {playlist.__name__} function: [{e}]')
        log.exception(e)
        return response.make(error=True, message=MESSAGE_ERROR)
