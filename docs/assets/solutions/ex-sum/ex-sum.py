# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:percent
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

# %% [markdown]
#
# With   `while`:

# %%
def mysum(seq):
    total = 0
    while seq:
        total += seq[0]
        seq = seq[1:]
    return total

# %% [markdown]
# With  `for`:
#

# %%
def mysum(seq):
    total = 0
    for x in seq:
        total += x
    return total

# %% [markdown]
# With `proc`:

# %%
from funcutils import proc
mysum = lambda seq: proc((0,seq),
                         lambda s: s[1],
                         lambda s: (s[0]+s[1][0], s[1][1:]))[0]

# %% [markdown]
# or
#

# %%
mysum = lambda seq: proc([0]+seq, lambda s: len(s)>1, lambda s: [s[0]+s[1]]+s[2:])[0]

# %% [markdown]
# With `funcutils.reduce`, which I think is as short as you get:
#

# %%
from functools import reduce
from operator import add

mysum = lambda seq: reduce(add, seq)

# %% [markdown]
# Another thing that the `reduce` solution is superior to the others, including Python's built-in `sum`, is that it can project the generality of addition. You cannot find the "sum" of a list of lists with `sum`, but with `mysum` defined with `reduce` you can do it:
#

# %%
mysum([[1,2],[3],[4,6,7]])

# %% [markdown]
# One drawback is that `reduce`-based solution cannot handle empty sequences. For that, you need to specify 0 as a third argument for arithmetic addition and `[]` for list concatenation.
