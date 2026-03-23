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

# %% [markdown]
# Assuming you have a flipping function like:

# %%
def flip(p):
    """Return True with probability p"""
    from random import random
    return random() < p


# %% [markdown]
# we can define a recursive function like:

# %%
def geometric(p):
    return 1 if flip(p) else 1 + geometric(p)


# %% [markdown]
# Let's play a little with our creation:

# %%
def test_geometric(p, n):
    from matplotlib import pyplot as plt
    import numpy as np
    n = int(n)
    
    # k is the number of experiments you want to make
    results = [geometric(p) for _ in range(n)]

    # the bins you want in your histogram
    bins = np.arange(1, max(results) + 2)

    _, ax = plt.subplots()
    ax.hist(results, bins=bins, density=True, edgecolor="black", align="left")
    ax.set_xlabel("Number of tosses until first success (k)")
    ax.set_ylabel("Estimated probability")
    ax.set_title(f"Geometric distribution samples (p = {p}, n = {n})")
    plt.show()
    return None


# %%
test_geometric(0.3, 1e6)
