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

# %% [markdown]
# **Part 1:** Extend your grammar so that you can parse sentences like  _Every student saw a dog with a telescope_, with its two readings (i.e.,
#         the one in which the dog has a telescope, and the one in which the
#         student has a telescope).

# %%
grammar1 = make_cfg("""
S  -> NP VP

NP -> Det N
NP -> NP PP

VP -> V
VP -> V NP
VP -> VP PP

PP -> P NP

Det -> 'every' | 'a' | 'the' | 'some'
N   -> 'student' | 'professor' | 'dog' | 'telescope'
V   -> 'walks' | 'saw' | 'talks'
P   -> 'with'
""")

parser1 = make_parser(grammar1)
trees1 = parser1("every student saw a dog with a telescope")
[t.pretty_print() for t in trees1]

# %% [markdown]
# **Part 2:** Your grammar generates ungrammatical sentences like _\*Every student saw_
#    (English requires an explicit object in this case). Modify your grammar so
#    that it does not generate such sentences. But, be careful, both _Every
#    student walks_ and _Every student walks a dog_ are grammatical, you should do
#    justice to this fact as well.

# %%
grammar2 = make_cfg("""
S  -> NP VP

NP -> Det N
NP -> NP PP

VP -> IV
VP -> TV NP
VP -> VP PP

PP -> P NP

Det -> 'every' | 'a' | 'the' | 'some'
N   -> 'student' | 'professor' | 'dog' | 'telescope'
IV   -> 'walks' | 'talks'
TV   -> 'walks' | 'saw'
P   -> 'with'
""")

# %%
parser2 = make_parser(grammar2)
parser2("every student saw")

# %%
parser2("every student walks a dog")[0].pretty_print()
parser2("every student walks")[0].pretty_print()

# %% [markdown]
# **Part 3:** Extend your grammar so that your grammar accepts sentences like _Every student talks to a professor_ and rejects _\*Every student talks a professor_.

# %%
grammar3 = make_cfg("""
S  -> NP VP

NP -> Det N
NP -> NP PP
DNP -> Dat NP


VP -> IV
VP -> TV NP
VP -> VP PP
VP -> OV DNP

PP -> P NP

Det -> 'every' | 'a' | 'the' | 'some'
N   -> 'student' | 'professor' | 'dog' | 'telescope'
IV   -> 'walks' | 'talks'
TV   -> 'walks' | 'saw'
OV   -> 'talks'
P   -> 'with'
Dat -> 'to'

""")

# %%
parser3 = make_parser(grammar3)
parser3("every student talks to a professor")[0].pretty_print()

# %%
[t.pretty_print() for t  in parser3("every student talks to a professor with a telescope")]

# %% [markdown]
# Another solution for _talk to_ would be to treat it as a single lexical item. However, there is a subtle distinction between verbal complexes like _talk to_ on one hand and those like _look at_ on the other. 
#
# _look_ allows many prepositions with clear shifts in meaning:
#
# 1. _look at_ (direct gaze toward),
# 1. _look for_ (search),
# 1. _look into_ (investigate),
# 1. _look after_ (take care of), etc.
#
# These are (diachronically) prepositional or phrasal-verb constructions with largely idiosyncratic semantics.
#
# _talk_ has a rather narrower set of productive patterns:
#
# 1. _talk to/with_ NP (addressee),
# 1. _talk about_ NP (topic),
# 1. _talk of_ NP (more formal/literary topic),
#
# In this sense _talk_ + P has a more systematic/transparent semantics. Compare the above types of _talk_ + P with lexicalized usages like _talk back_, _talk down to_, etc., which have negative connotations.
#
# Both _look at_ and _talk to_ syntactically differ from phrasal verbs like _look up_.
#
# 1. I looked the word up.
# 2. \*I looked the word at.
# 2. I looked it up.
# 2. \*I looked up it.
# 2. \* I looked it at.
# 3. I looked at it. 
