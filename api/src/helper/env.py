import os


def _get(env_key):
    if env_key in os.environ:
        return os.environ[env_key]
    return None


def get_github_client_id():
    return _get('GITHUB_CLIENT_ID')


def get_github_client_secret():
    return _get('GITHUB_CLIENT_SECRET')
