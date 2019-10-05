from nltk import FreqDist
from nltk.corpus import stopwords

from src import *


def __replace(what_to_replace):
    what_to_replace = what_to_replace.replace('-', '')
    what_to_replace = what_to_replace.replace(':', '')
    what_to_replace = what_to_replace.replace('[', '')
    what_to_replace = what_to_replace.replace(']', '')
    what_to_replace = what_to_replace.replace('\'', '')
    return what_to_replace.strip()


def _clean_token(what_to_clean):
    cleaned_tok = []
    stop_list = stopwords.words('english')
    for sentence in what_to_clean:
        for word in sentence.split():
            if len(word) > 2 and (word not in stop_list):
                cleaned_tok.append(__replace(word))
    return cleaned_tok


def extract_most_common(sentences, k=NLP_MOST_COMMON_K):
    word_list = _clean_token(sentences)
    freq_dist = FreqDist(word_list)
    most_frequent_words = freq_dist.most_common(k)
    return [m[0] for m in most_frequent_words]
