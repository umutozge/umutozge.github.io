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
# All you can expect from Python is to generate for you a random number in $[1,0)$. In an unbiased `flip` all the shots of `random` below 0.5 would be `True` and above would be `False`, or vice versa. Now you can adjust the bias of the `flip` with the parameter `p`.

# %%
def flip(p):
    """Return True with probability p"""
    from random import random
    return random() < p


# %% [markdown]
# You can test your flip by:

# %%
len([k for k in [flip(0.8) for _ in range(int(1e5))] if k])/1e5
