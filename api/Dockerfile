FROM python:3.7
ADD . /srv/git_inspect
WORKDIR /srv/git_inspect
RUN pip install --upgrade pip
RUN pip3 install -r requirements.lock
RUN python3 -m nltk.downloader stopwords
CMD uwsgi --ini git_inspect.ini