from src import *
from src.helper import response
from src.services import github


def get(github_user):
    response_dict = {}

    # Basic information
    basic_information = github.get_basic_user_information(github_user)
    if not basic_information:
        return response.make(error=True, message=MESSAGE_USER_NOT_FOUND)
    response_dict['photo'] = response.get_attribute('avatar_url', basic_information)
    response_dict['public_repos'] = response.get_attribute('public_repos', basic_information)
    response_dict['public_gists'] = response.get_attribute('public_gists', basic_information)
    response_dict['followers'] = response.get_attribute('followers', basic_information)
    response_dict['following'] = response.get_attribute('following', basic_information)

    return response.make(error=False, response=response_dict)
