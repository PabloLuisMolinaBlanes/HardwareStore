from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from nltk.corpus import stopwords
import re
import pandas as pd

cachedStopWords = stopwords.words("english")
cachedStopWords.extend(stopwords.words("spanish"))
ngrams_min = 1
ngrams_max = 1
min_df = 1

def turnToTfIdfModel(allsentences: list[str]):
    vectorizer = TfidfVectorizer(ngram_range=(ngrams_min,ngrams_max), min_df=min_df)
    X = vectorizer.fit_transform(allsentences)
    doc_term_matrix = X.todense()
    df = pd.DataFrame(
        doc_term_matrix,
        columns=vectorizer.get_feature_names_out(),
        index=range(len(allsentences)),
    )
    return df

def normalize_string(s) -> str:
    s : str = re.sub(r"\n{1,}", " ", s)
    s : str = re.sub(r"^ *", "", s)
    s : str = re.sub(r"[\(\[].*?[\)\]]", "", s)
    s: str = re.sub(r"<br>", "", s)
    s: str = re.sub(r"&gt;&gt;", "", s)
    s = s.lower()
    s = ''.join(e for e in s if e.isalnum() or e.isspace())
    s = ' '.join([word for word in s.split() if word not in cachedStopWords])
    return s