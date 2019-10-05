GITHUB_API_RETRIES = 3
GITHUB_API_RTD = 5
GITHUB_API_TIMEOUT = 15
GITHUB_SINGLE_USER_ENDPOINT = 'https://api.github.com/users/{username}'
GITHUB_USER_REPOS_ENDPOINT = 'https://api.github.com/users/{username}/repos'
GITHUB_LANGUAGES_ENDPOINT = 'https://api.github.com/repos/{username}/{repository}/languages'
GITHUB_TOPICS_ENDPOINT = 'https://api.github.com/repos/{username}/{repository}/topics'

GITHUB_OTHERS_LABEL = 'Others'
GITHUB_LANGUAGES_MAX = 7
GITHUB_TOPICS_MAX = 7

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
    'MESSAGE_ERROR',
    'MESSAGE_USER_NOT_FOUND',
    'MESSAGE_REPOS_NOT_FOUND'
]
