CONCURRENT_POOL = 10

GITHUB_API_RETRIES = 3
GITHUB_API_RTD = 5
GITHUB_API_TIMEOUT = 15
GITHUB_PER_PAGE = 100
GITHUB_SINGLE_USER_ENDPOINT = 'https://api.github.com/users/{username}'
GITHUB_USER_REPOS_ENDPOINT = 'https://api.github.com/users/{username}/repos'
GITHUB_LANGUAGES_ENDPOINT = 'https://api.github.com/repos/{username}/{repository}/languages'
GITHUB_TOPICS_ENDPOINT = 'https://api.github.com/repos/{username}/{repository}/topics'
GITHUB_CONTRIBUTORS_ENDPOINT = 'https://api.github.com/repos/{username}/{repository}/contributors'
GITHUB_USER_EVENTS_ENDPOINT = 'https://api.github.com/users/{username}/events'

GITHUB_OTHERS_LABEL = 'Others'
GITHUB_LANGUAGES_MAX = 7
GITHUB_TOPICS_MAX = 7
GITHUB_PUSH_EVENT_TYPE = 'PushEvent'

NLP_MOST_COMMON_K = 25

SPOTIFY_API_RETRIES = 3
SPOTIFY_API_RTD = 5
SPOTIFY_API_TIMEOUT = 15
SPOTIFY_RESPONSE_TYPE = 'code'
SPOTIFY_REDIRECT_URI = 'https://gitinspect.ml/'
SPOTIFY_SCOPES = 'playlist-modify-private playlist-modify-public'
SPOTIFY_API_LOGIN_URL = 'https://accounts.spotify.com/authorize'
SPOTIFY_API_TOKEN_URL = 'https://accounts.spotify.com/api/token'
SPOTIFY_API_CURRENT_USER = 'https://api.spotify.com/v1/me'
SPOTIFY_API_CREATE_PLAYLIST = 'https://api.spotify.com/v1/users/{user_id}/playlists'
SPOTIFY_API_SEARCH = 'https://api.spotify.com/v1/search'
SPOTIFY_API_ADD_TRACKS = 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks'

MESSAGE_ERROR = 'Unexpected error.'
MESSAGE_USER_NOT_FOUND = 'User not found.'
MESSAGE_REPOS_NOT_FOUND = 'You should have at least one public repository.'
MESSAGE_TOKEN_NOT_FOUND = 'Error while retrieving the Spotify token.'
MESSAGE_SPOTIFY_NOT_FOUND = 'Spotify user not found.'
MESSAGE_SPOTIFY_PLAYLIST_ERROR = 'Spotify playlist cannot be created.'
MESSAGE_COMMIT_NOT_FOUND = 'Any commit could be retrieved.'
MESSAGE_SPOTIFY_TRACK_ERROR = 'Spotify tracks cannot be created.'


__all__ = [
    'CONCURRENT_POOL',
    'GITHUB_API_RETRIES',
    'GITHUB_API_RTD',
    'GITHUB_API_TIMEOUT',
    'GITHUB_PER_PAGE',
    'GITHUB_SINGLE_USER_ENDPOINT',
    'GITHUB_USER_REPOS_ENDPOINT',
    'GITHUB_LANGUAGES_ENDPOINT',
    'GITHUB_TOPICS_ENDPOINT',
    'GITHUB_OTHERS_LABEL',
    'GITHUB_LANGUAGES_MAX',
    'GITHUB_TOPICS_MAX',
    'GITHUB_PUSH_EVENT_TYPE',
    'GITHUB_CONTRIBUTORS_ENDPOINT',
    'GITHUB_USER_EVENTS_ENDPOINT',
    'NLP_MOST_COMMON_K',
    'SPOTIFY_API_RETRIES',
    'SPOTIFY_API_RTD',
    'SPOTIFY_API_TIMEOUT',
    'SPOTIFY_RESPONSE_TYPE',
    'SPOTIFY_REDIRECT_URI',
    'SPOTIFY_SCOPES',
    'SPOTIFY_API_LOGIN_URL',
    'SPOTIFY_API_TOKEN_URL',
    'SPOTIFY_API_CURRENT_USER',
    'SPOTIFY_API_CREATE_PLAYLIST',
    'SPOTIFY_API_SEARCH',
    'SPOTIFY_API_ADD_TRACKS',
    'MESSAGE_ERROR',
    'MESSAGE_USER_NOT_FOUND',
    'MESSAGE_REPOS_NOT_FOUND',
    'MESSAGE_TOKEN_NOT_FOUND',
    'MESSAGE_SPOTIFY_NOT_FOUND',
    'MESSAGE_SPOTIFY_PLAYLIST_ERROR',
    'MESSAGE_COMMIT_NOT_FOUND',
    'MESSAGE_SPOTIFY_TRACK_ERROR'
]
