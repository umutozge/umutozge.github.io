# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.19.1
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %%
from coursepy.lang.parsing import make_parser, make_cfg

grammar_text = """
S  -> NP VP
NP -> Det N | Det N PP
VP -> V NP | VP PP
PP -> P NP
Det -> 'the' | 'a'
N  -> 'dog' | 'owner' | 'leash'
V  -> 'found'
P  -> 'with'
"""

parse = make_parser(make_cfg(grammar_text))

[t.pretty_print() for t in parse("the owner found the dog with the leash")]
