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

grammar_text="""

E -> E O E
E -> LP E RP 
E -> '1'|'2'|'3'|'4'
O -> '+'|'*'
LP -> '('
RP -> ')'
"""

parser = make_parser(make_cfg(grammar_text))

for e in "3 + 4,3 + 4 * 2,( 3 + 4 ) * 2".split(","):
    print(f"Parse(s) for `{e}`:")
    for t in parser(e):
        t.pretty_print()

# %% [markdown]
# Note that this would accept `(3)` as well-formed, which is fine. If you want to avoid that, you need to have a rule where parens are introduced only around  `E O E`.
#
# Also, the paren rule could have directly mentioned '(' and ')', but the pretty print does not work fine presumably due to a bug in `nltk`.
