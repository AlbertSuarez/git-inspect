GITHUB_API_RETRIES = 3
GITHUB_API_RTD = 5
GITHUB_API_TIMEOUT = 15
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

SPOTIFY_RESPONSE_TYPE = 'code'
SPOTIFY_REDIRECT_URI = 'https://127.0.0.1:8085/'
SPOTIFY_SCOPES = 'playlist-modify-private playlist-modify-public'
SPOTIFY_API_LOGIN_URL = 'https://accounts.spotify.com/authorize'

MESSAGE_ERROR = 'Unexpected error.'
MESSAGE_USER_NOT_FOUND = 'User not found.'
MESSAGE_REPOS_NOT_FOUND = 'You should have at least one public repository.'


__all__ = [
    'GITHUB_API_RETRIES',
    'GITHUB_API_RTD',
    'GITHUB_API_TIMEOUT',
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
    'SPOTIFY_RESPONSE_TYPE',
    'SPOTIFY_REDIRECT_URI',
    'SPOTIFY_SCOPES',
    'SPOTIFY_API_LOGIN_URL',
    'MESSAGE_ERROR',
    'MESSAGE_USER_NOT_FOUND',
    'MESSAGE_REPOS_NOT_FOUND'
]
