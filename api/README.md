# Git Inspect: API

## Requirements

1. Python 3.7+

## Recommendations

Usage of [virtualenv](https://realpython.com/blog/python/python-virtual-environments-a-primer/) is recommended for package library / runtime isolation.

## Usage

To run the server, please execute the following from the root directory:

1. Setup virtual environment

2. Install dependencies

    ```bash
    pip3 install -r requirements.lock
    ```

3. Initialize the `api` module environment creating the `.env` file.
This file must have this structure (without the brackets):

    ```bash
    GITHUB_CLIENT_ID={GITHUB_CLIENT_ID}
    GITHUB_CLIENT_SECRET={GITHUB_CLIENT_SECRET}
    SPOTIFY_CLIENT_ID={SPOTIFY_CLIENT_ID}
    SPOTIFY_CLIENT_SECRET={SPOTIFY_CLIENT_SECRET}
    ```

4. Run API server as a python module

    ```bash
    python3 -m src
    ```
