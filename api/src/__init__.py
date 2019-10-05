GITHUB_API_RETRIES = 3
GITHUB_API_RTD = 5
GITHUB_API_TIMEOUT = 15
GITHUB_SINGLE_USER_ENDPOINT = 'https://api.github.com/users/{username}'
GITHUB_USER_REPOS_ENDPOINT = 'https://api.github.com/users/{username}/repos'

MESSAGE_USER_NOT_FOUND = 'User not found.'
MESSAGE_REPOS_NOT_FOUND = 'You should have at least one public repository.'


__all__ = [
    'GITHUB_API_RETRIES',
    'GITHUB_API_RTD',
    'GITHUB_API_TIMEOUT',
    'GITHUB_SINGLE_USER_ENDPOINT',
    'GITHUB_USER_REPOS_ENDPOINT',
    'MESSAGE_USER_NOT_FOUND',
    'MESSAGE_REPOS_NOT_FOUND'
]
