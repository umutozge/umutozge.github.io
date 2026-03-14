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
# It must be fairly straightforward to decide to start with the constructors. Define what is the base element in your system, and define how to construct other elements from this unique seed.
#
# One must, however, do this with some care. The correct approach is to first define the base element and do something else before immediately defining the other constructor, namely the successor function.
#
# There are two reasons for this thoughtful attitude, and the second reason comes into existence because of the first reason.
#
# First reason: Our successor function must be able to check that its argument is of `peano` type, we would not want to wrap non-`peano` items into tuples. Therefore, after defining our base constructor for zero, we better define what does it mean to be a `peano` type of object (the function `peanop`).
#
# Second reason: The function that will check the `peano`ness of its input, at some point, will obviously want to see whether the object under inquiry is the base (zero) of our system or not. What about it?, you might wonder. After all, you can just ask whether the input is `None` or not, can't you? But, there is a more sensible way to proceed.
#
# The system we are building is almost pure structure. The only particular decision we make when designing it is to decide on `None` to be the base element. Any other decision would equally be fine; there is nothing special about `None`. As this is the only _externally_ set component of the system, it is better to make it easy to change our minds on this decision in the future; who knows?
#
# Making the choice of the base element easier to change simply means to type that particular token `None` _only once_ in our system. Although the present example is so simple that this precaution might seem unnecessary, it exemplifies a very important design choice in building programs (and even theories).
#
# Given all this, the correct sequence of defining the building blocks of our system is:
# 1. `zero`
# 2. `zerop`
# 3. `peanop`
# 4. `succ`
#
# Of course, by "sequence" I do not mean the textual sequence of the definitions in the program file; Python does not care about that sequence. What I mean is the dependency hierarcy, i.e., which function is written in terms of which functions.
#

# %% [markdown]
# Here is our first definition:

# %%
def zero():
    return None 


# %% [markdown]
# The above will be the one and only one `None` that we type. In a later stage, if we want to change our base element, we will come and change this definition, and we will be good.

# %% [markdown]
# Next comes `zerop`:

# %%
def zerop(p):
    return p == zero()


# %% [markdown]
# We directly implement the type definition in Python:

# %%
def peanop(p):
    return (
            zerop(p)
            or
            (
                isinstance(p, tuple) and len(p) == 1 and peanop(p[0])
            )
           )


# %% [markdown]
# Now we have the ability to keep types controlled throughout.
#
# Here is our successor function, which will crash unless it is provided a `peano` argument: 

# %%
def succ(p):
   assert peanop(p)
   return (p,) # the comma is critical here, that's the way to make a 1-tuple 


# %% [markdown]
# Let's handle the conversions:

# %%
def to_int(p):
    assert peanop(p)
    return\
        0 if zerop(p) else 1 + to_int(p[0])


# %%
def from_int(n):
    assert isinstance(n, int) and n >= 0
    return\
        zero() if n == 0 else succ(from_int(n-1))


# %% [markdown]
# Addition:

# %%
def peano_add(p, q):
    assert peanop(p) and peanop(q)
    return\
        p if zerop(q) else succ(peano_add(p,q[0]))


# %% [markdown]
# I hope you frequently test your code as you build. E.g.:

# %%
to_int(peano_add(from_int(8),from_int(16)))


# %%
def peano_mult(p, q):
    assert peanop(p) and peanop(q)
    return\
        zero() if zerop(q) else peano_add(peano_mult(p, q[0]), p)


# %% [markdown]
# Finally the equality. Try to give some style to it!

# %%
def peano_eq(p, q):
    assert peanop(p) and peanop(q)
    return\
        (
        True
        if zerop(peano_add(p,q))
        else
        (
            False
            if zerop(p) or zerop(q)
            else
            peano_eq(p[0], q[0]))
        )


# %% [markdown]
# Now, if you reached this far, you will see that when the result of an operation is zero, nothing gets printed, as the value for zero is `None`. If this annoys you, go back to where you defined your zero and change it to something else. E.g.:

# %%
peano_mult(from_int(873),zero())

