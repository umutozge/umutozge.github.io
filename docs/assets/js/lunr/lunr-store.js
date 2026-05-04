var store = [{
        "title": "`collatz`",
        "excerpt":"View / copy raw utils.py 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 from funcutils import proc_seq def collatz(n): \"\"\"The...","categories": [],
        "tags": [],
        "url": "/code/python/modules/collatz/",
        "teaser": null
      },{
        "title": "`funcutils`",
        "excerpt":"View / copy funcutils.py 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 def proc_seq(n, seq, alive, update, init,...","categories": [],
        "tags": ["funprog"],
        "url": "/code/python/modules/funcutils/",
        "teaser": null
      },{
        "title": "Files",
        "excerpt":"In Python, you can work with files using the built-in open() function. Below is an example of how to read from and write to a file. # Writing to a file with open(\"example.txt\", \"w\") as file: file.write(\"Hello, World!\\n\") file.write(\"This is a sample file.\\n\") # Reading from a file with open(\"example.txt\",...","categories": [],
        "tags": ["i/o"],
        "url": "/code/python/snippets/files/",
        "teaser": null
      },{
        "title": "Plotting",
        "excerpt":"The most basic way to create plots in Python is by using the matplotlib library. Below is an example of how to create a simple line plot. import matplotlib.pyplot as plt x = [1, 2, 3, 4, 5] y = [1, 4, 9, 16, 25] plt.plot(x, y) plt.xlabel(\"X-axis\") plt.ylabel(\"Y-axis\") plt.title(\"Simple...","categories": [],
        "tags": ["python","plotting"],
        "url": "/code/python/snippets/plotting/",
        "teaser": null
      },{
        "title": "A sequence processor",
        "excerpt":"def proc_seq(n, sequencer, alive, update, init): \"\"\"Process a sequence of items. sequencer: function that produces the next item in the sequence alive: function that tests whether to continue processing update: function that updates the state init: initial state &gt;&gt;&gt; def sequencer(n): return n - 1 &gt;&gt;&gt; def alive(n): return n...","categories": [],
        "tags": ["funprog"],
        "url": "/code/python/snippets/proc_seq/",
        "teaser": null
      },{
        "title": "Randomization",
        "excerpt":"There are two relevant modules. random is for basic general purpose randomization; numpy.random is for more advanced randomization for scientific computing, statistics, machine learning, etc. Generate random integer: random.randint(a,b) # Returns a random integer in the range [a,b], # including both end points. Basic random choice: random.choice(seq) # Choose a...","categories": [],
        "tags": [],
        "url": "/code/python/snippets/randomization/",
        "teaser": null
      },{
        "title": "Scientific computing",
        "excerpt":"math At the stage where we work with simple lists rather than tensors, using built-in math module is often sufficient for basic mathematical operations. from math import exp, log, sqrt and, so on. These are not vectorized functions, therefore you need to do the mapping of a list of values...","categories": [],
        "tags": ["numerical","scientific"],
        "url": "/code/python/snippets/scientific/",
        "teaser": null
      },{
        "title": "Sorting",
        "excerpt":"Basic non-mutating sorting is done with the built-in sorted() function: numbers = [5, 2, 9, 1, 5, 6] sorted_numbers = sorted(numbers) print(sorted_numbers) # Output: [1, 2, 5, 5, 6, 9] If you have a more complex data structure that you need to sort, you can handle it with the key...","categories": [],
        "tags": ["python","sorting"],
        "url": "/code/python/snippets/sorting/",
        "teaser": null
      },{
        "title": "Strings",
        "excerpt":"Strings in Python are sequences of characters and come with a variety of built-in methods for manipulation and analysis. Here are some common operations: # Creating a string my_string = \"Hello, World!\" # Accessing characters first_char = my_string[0] # 'H' last_char = my_string[-1] # '!' # Slicing substring = my_string[0:5]...","categories": [],
        "tags": ["python","strings"],
        "url": "/code/python/snippets/strings/",
        "teaser": null
      },{
        "title": "Tokenization",
        "excerpt":"The simplest built-in tokenization method in Python is the split() method, which splits a string into words based on whitespace. text = \"Ali ile Ayşe okula gitti. Sonra eve döndüler.\" words = text.split() print(words) # ['Ali', 'ile', 'Ayşe', 'okula', 'gitti', '.', 'Sonra', 'eve', 'döndüler', '.'] Tokenization with NLTK import nltk...","categories": [],
        "tags": ["strings","language"],
        "url": "/code/python/snippets/tokenization/",
        "teaser": null
      },{
        "title": "COGS 502 Quiz",
        "excerpt":"[2pt] You roll a 6-sided dice once; only if the outcome is even, you roll it for a second time. What is the probability that you roll a 6 on the second roll? [2pts] A six-sided die is loaded in a way that each even face is twice as likely...","categories": [],
        "tags": [],
        "url": "/exams/2026-02-26-502-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-03-05-502-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-03-12-502-quiz/",
        "teaser": null
      },{
        "title": "543 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-03-18-543-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-03-26-502-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-04-02-502-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-04-16-502-quiz/",
        "teaser": null
      },{
        "title": "543 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-04-29-543-quiz/",
        "teaser": null
      },{
        "title": "502 Quiz",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/exams/2026-04-30-502-quiz/",
        "teaser": null
      },{
        "title": "Basic probability",
        "excerpt":"Define flip(p) that returns True with probability p and False with probability (1-p). The only built-in you can use is random.random: &gt;&gt;&gt; import random &gt;&gt;&gt; random.random() # returns a number in [0,1) 0.4013560344771465 which returns a uniformly distributed number in the interval [0,1). You cannot specify any parameters to random.random()....","categories": [],
        "tags": ["probability"],
        "url": "/exercises/basic-probability/",
        "teaser": null
      },{
        "title": "Combinatorics",
        "excerpt":"Playing cards: A standard deck has 52 cards, divided into 4 suits (hearts ♥️, diamonds ♦️, clubs ♣️, spades ♠️), each with 13 ranks (A(ce), 2, …, 10, J(ack), Q(ueen), K(ing)). The cards J, Q, and K are called face cards. Suits are broken into two colors: red (♥️, ♦️)...","categories": [],
        "tags": ["probability"],
        "url": "/exercises/combinatorics/",
        "teaser": null
      },{
        "title": "Formal semantics",
        "excerpt":"For each pair, determine the logical relation between the left and right formulas (implies, contradicts, or independent): \\[\\begin{gather} \\forall x.\\con{p}x\\rightarrow \\con{q}x&amp; \\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x\\rightarrow \\con{q}x&amp; \\exists x.\\con{q}x\\\\ \\exists x.\\con{p}x\\wedge \\con{q}x&amp; \\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x &amp;\\exists x.\\con{p}x\\\\ \\neg\\exists x\\,\\con{r}x&amp; \\forall x.\\neg\\con{r}x\\\\ \\forall x.\\con{p}x\\land\\con{r}x&amp; \\forall x.\\con{p}x\\rightarrow \\con{r}x\\\\ \\forall x.\\con{p}x\\land\\con{r}x&amp; \\forall x.\\con{p}x...","categories": [],
        "tags": ["language","semantics","logic"],
        "url": "/exercises/formal-semantics/",
        "teaser": null
      },{
        "title": "Higher-order functions",
        "excerpt":"Define a function apply_twice that takes a function f and a value x, and returns the result of applying f to x two times. def sqr(x): return x * x def apply_twice(f, x): \"\"\"apply f to x twice. &gt;&gt;&gt; apply_twice(sqr, 3) 81 \"\"\" Define a function applier that applies a...","categories": [],
        "tags": ["python","funprog"],
        "url": "/exercises/higher-order-functions/",
        "teaser": null
      },{
        "title": "Iteration",
        "excerpt":"The factorial function is defined over the non-negative integers as:1 \\[n! = \\begin{cases} 1, &amp; \\text{if } n = 0;\\\\ n \\times (n - 1)!, &amp; \\text{if } n &gt; 0. \\end{cases}\\] Define a function that computes the factorial of a given non-negative integer \\(n\\) using iteration by while. def...","categories": [],
        "tags": ["python","iteration","programming"],
        "url": "/exercises/iteration/",
        "teaser": null
      },{
        "title": "Linear Algebra",
        "excerpt":"Define a function dot_product(v, w) that takes two equal-length lists of numbers v and w and returns their dot product. Criteria The dot product is defined as the sum of the products of the corresponding elements of the two sequences. For example, the dot product of [1, 2, 3] and...","categories": [],
        "tags": ["linear algebra"],
        "url": "/exercises/linalg/",
        "teaser": null
      },{
        "title": "Basic number theory",
        "excerpt":"Prove the following: Theorem (Some properties of divisibility) Let \\(a,b,c \\in \\mathbb{Z}\\) and \\(a \\neq 0\\). Then: i. if \\(a \\mid b\\) and \\(a \\mid c\\), then \\(a \\mid (b+c)\\); ii. if \\(a \\mid b\\), then \\(a \\mid kb\\) for any integer \\(k\\); iii. if \\(a \\mid b\\) and \\(b...","categories": [],
        "tags": ["discrete","proof","number theory"],
        "url": "/exercises/numbers/",
        "teaser": null
      },{
        "title": "Peano Arithmetic",
        "excerpt":"How many natural numbers are there? In one sense, there are infinitely many of them. In this sense we think in particular objects like \\(1,2,3,\\ldots\\). In another, more abstract, sense, number is a concept rather than a collection of entities. If you insist on concreteness, then it can be said...","categories": [],
        "tags": ["discrete","number theory","recursion","typing"],
        "url": "/exercises/peano-arithmetic/",
        "teaser": null
      },{
        "title": "Phrase Structure Grammars",
        "excerpt":"In some of the exercises below you are asked to use the Python module nltk to build and use phrase structure grammars. All necessary modules and helpers can be obtained via coursepy. You can directly use nltk itself if you like. The imports needed: from coursepy.lang.parsing import make_parser, make_cfg Here...","categories": [],
        "tags": ["language","parsing","grammar"],
        "url": "/exercises/psg/",
        "teaser": null
      },{
        "title": "Basic Recursion",
        "excerpt":"Given an item and a sequence, tell whether the item is in the sequence or not. Use recursion. 🗝️ Find the length of a given sequence. Use recursion. 🗝️ Given a possibly nested sequence and an item, count the occurrences of the item in the sequence. For instance given, [1,...","categories": [],
        "tags": ["recursion"],
        "url": "/exercises/recursion/",
        "teaser": null
      },{
        "title": "Sequence operations",
        "excerpt":"In the following exercises, you can treat sequences as lists or tuples, unless explicitly stated otherwise. Define a function mysum(seq) that returns the sum of all numbers in the list seq. def mysum(seq): \"\"\"Return the sum of all numbers in seq. In: seq - a sequnce of summable items Out:...","categories": [],
        "tags": ["python","sequence","lists","tuples"],
        "url": "/exercises/sequence-operations/",
        "teaser": null
      },{
        "title": "Sets",
        "excerpt":"Unless otherwise specified, you may use Python lists to represent sets. Given a set \\(A\\), the powerset of \\(A\\), denoted by \\(\\mathcal{P}(A)\\), is the set of all subsets of \\(A\\). Given a set of items provided as a list, write a function that returns the power set of the given...","categories": [],
        "tags": ["sets"],
        "url": "/exercises/sets/",
        "teaser": null
      },{
        "title": "Zipf's Law",
        "excerpt":"Assume we have a collection of texts (corpus) with \\(n\\) words. We pair each unique word \\(w\\) with its frequency of occurrence in the corpus, designated as \\(f(w)\\). The rank \\(r(w)\\) of a word \\(w\\), with \\(1 \\leq r(w) \\leq n\\) is defined as its position in the list of...","categories": [],
        "tags": ["probability","language"],
        "url": "/exercises/zipfs-law/",
        "teaser": null
      },{
        "title": "Characteristic function",
        "excerpt":"For every set \\(A\\), there exists a unique function \\(f_A\\), called the characteristic function of \\(A\\), defined as follows:   \\[f_A(x) = \\begin{cases} 1,  \\text{ if } x \\in A \\\\ 0,  \\text{ otherwise } \\end{cases}\\] ","categories": [],
        "tags": [],
        "url": "/items/df-char-func/",
        "teaser": null
      },{
        "title": "Set exponents",
        "excerpt":"Given two sets \\(X\\) and \\(Y\\), \\(X^Y\\) denotes the set of all functions defined from \\(Y\\) to \\(X\\).     The notation is motivated by the fact that given two sets \\(X\\) and \\(Y\\) with cardinalities \\(m\\) and \\(n\\), respectively. There exists \\(m^n\\) functions from \\(Y\\) to \\(X\\).  ","categories": [],
        "tags": [],
        "url": "/items/df-funcset/",
        "teaser": null
      },{
        "title": "Environment extension",
        "excerpt":"Given an environment \\(g\\), a variable \\(x\\), and a constant \\(c\\), an extension of \\(g\\) is the function denoted as \\(\\fnex{g}{x}{c}\\) which is exactly like \\(g\\) possibly except that it maps \\(x\\) to \\(c\\).  ","categories": [],
        "tags": [],
        "url": "/items/df-mt-env-ext/",
        "teaser": null
      },{
        "title": "Semantics of L",
        "excerpt":"\\(\\interpp{\\alpha} = g(\\alpha)\\), if \\(\\alpha \\in V\\) \\(\\interpp{\\alpha} = I(\\alpha)\\), if \\(\\alpha \\in C \\cup K\\) \\( \\interpp{(\\alpha\\beta)} = \\interpp{\\alpha}(\\interpp{\\beta}) \\) \\(\\interpp{(\\forall \\alpha_{\\pi} \\beta)} = 1\\) iff for all \\(d \\in D_{\\pi}\\), \\(\\interp{\\beta}_{\\mathcal{M},\\fnex{g}{x}{d}} = 1\\) \\(\\interpp{(\\exists \\alpha_{\\pi} \\beta)} = 1\\) iff there is at least one \\(d \\in D_{\\pi}\\), \\(\\interp{\\beta}_{\\mathcal{M},\\fnex{g}{x}{d}}...","categories": [],
        "tags": [],
        "url": "/items/df-mt-l0-sem/",
        "teaser": null
      },{
        "title": "Syntax",
        "excerpt":"Given the sets \\(C\\), \\(K\\), \\(V\\), \\(Q\\) for constants, connectives, variables, and quantifiers, respectively, the language \\(L\\) is defined as follows: \\(C\\cup K\\cup V \\subseteq L\\) If \\(\\pi_{\\smtyp{\\alpha}{\\beta}} \\in L\\) and \\(\\sigma_{\\alpha} \\in L\\), then \\((\\pi\\sigma)_{\\beta} \\in L\\). If \\(\\kappa \\in \\{\\forall,\\exists\\}\\), \\(\\chi \\in V\\) and \\(\\tau_{t} \\in L\\), then...","categories": [],
        "tags": [],
        "url": "/items/df-mt-l0/",
        "teaser": null
      },{
        "title": "Semantic types",
        "excerpt":"Given a set \\(T\\) of basic semantic types.      \\(\\tau\\) is a semantic type if \\(\\tau \\in T\\).   If \\(\\tau_1\\) and \\(\\tau_2\\) are semantic types, then \\(\\smtyp{\\tau_1}{\\tau_2}\\) is a semantic type.   Nothing else is a semantic type.  ","categories": [],
        "tags": [],
        "url": "/items/df-sem-types/",
        "teaser": null
      },{
        "title": "Addition",
        "excerpt":"   \\(\\forall x. x+0=x\\).   \\(\\forall x,y. x+s(y) = s(x + y)\\).  ","categories": [],
        "tags": [],
        "url": "/items/df-addition/",
        "teaser": null
      },{
        "title": "Multiplication",
        "excerpt":"   \\(\\forall x. x\\cdot 0=x\\).   \\(\\forall x,y. x\\cdot s(y) = x\\cdot y + x\\).  ","categories": [],
        "tags": [],
        "url": "/items/df-multiplication/",
        "teaser": null
      },{
        "title": "The Peano type",
        "excerpt":"A Python object p is of type peano if,     it is None, or,   it is a 1-tuple whose sole member is of peano type.  ","categories": [],
        "tags": [],
        "url": "/items/df-peano-type/",
        "teaser": null
      },{
        "title": "Conditional proability",
        "excerpt":"The conditional probability of an event \\(A\\) given an event \\(B\\) is the probability of \\(A\\) occurring given that \\(B\\) has occurred. It is denoted as \\(P(A\\given B)\\) and can be calculated using the formula:   \\[P(A\\given B) = \\frac{P(A \\cap B)}{P(B)}\\] ","categories": [],
        "tags": [],
        "url": "/items/df-cond-prob/",
        "teaser": null
      },{
        "title": "A simple model",
        "excerpt":"\\(\\mathcal{M} = \\langle D, I\\rangle\\) with domain:   \\[\\begin{align*} D = \\{a,b,c,d,e\\} \\end{align*}\\]  Interpretation function:   \\[\\begin{align*} I(\\con{anna}) &amp;= a\\\\ I(\\con{ben}) &amp;= b\\\\ I(\\con{cara}) &amp;= c\\\\ I(\\con{student}) &amp;= \\{a,b\\}\\\\ I(\\con{linguist}) &amp;= \\{b,c\\}\\\\ I(\\con{book}) &amp;= \\{d,e\\}\\\\ I(\\con{admire}) &amp;= \\{(a,b),(b,c),(c,d)\\}\\\\ I(\\con{read}) &amp;= \\{(a,d),(b,e),(c,d),(a,e)\\}\\\\ I(\\con{recommend}) &amp;= \\{(a,d),(c,a),(c,d)\\}\\\\ \\end{align*}\\]  Environment:   \\[\\begin{align*} g=\\lbrace (x,a), (y,b)\\rbrace \\end{align*}\\] ","categories": [],
        "tags": [],
        "url": "/items/eg-simple-model/",
        "teaser": null
      },{
        "title": "Grammar for arithmetic",
        "excerpt":"Consider simple arithmetic expressions involving addition and multiplication, such as: 3 + 4 3 + 4 * 2 ( 3 + 4 ) * 2 Write a CFG over the terminals \\(\\lbrace +, *, (, ),2,3,4\\)} that generates such expressions. Your grammar should assign more than one phrase structure to...","categories": [],
        "tags": [],
        "url": "/items/ex-arithmetic-grammar/",
        "teaser": null
      },{
        "title": "FOL basics",
        "excerpt":"State whether each atomic formula is true or false in : \\[\\begin{gather*} \\con{student}\\con{anna}\\\\ \\con{book}\\con{anna}\\\\ \\con{linguist}\\con{cara}\\\\ \\con{admire}\\con{ben}\\con{anna}\\\\ \\con{admire}\\con{anna}\\con{ben}\\\\ \\end{gather*}\\] Evaluate the following formulas in . \\[\\begin{gather*} \\exists x.\\con{student}x\\\\ \\forall x.\\con{student}x \\rightarrow \\con{linguist}x\\\\ \\exists x.\\con{student}x \\land \\con{linguist}x\\\\ \\forall x.\\con{book}x \\rightarrow \\con{student}x\\\\ \\exists x\\forall y. \\con{admire}y\\cnct x\\\\ \\con{student}x\\\\ \\con{linguist}x\\\\ \\exists x.\\con{admire}x\\cnct y\\\\ \\end{gather*}\\]...","categories": [],
        "tags": [],
        "url": "/items/ex-fol-basics/",
        "teaser": null
      },{
        "title": "Lambda calculus basics",
        "excerpt":"State the type of the whole expression; there are partial type decorations: \\[\\begin{gather*} \\lambda x.\\con{student}_{et}x\\\\ \\lambda x.\\con{read}_{e(et)}x\\,\\con{anna}_{e}\\\\ \\lambda p\\exists x. p_{et}\\, x\\\\ \\lambda y\\lambda x.\\con{admire}_{e(et)}y\\, x\\\\ \\lambda f\\lambda g\\lambda x.f_{e(tt)}\\,x(gx) \\end{gather*}\\] Identify bound and free variables in: \\[\\begin{gather*} \\lambda x.\\con{student}x\\\\ \\lambda x.\\con{admire}y\\cnct x\\\\ \\lambda p\\lambda x.p\\cnct x\\land \\con{student}x q\\cnct x\\\\...","categories": [],
        "tags": [],
        "url": "/items/ex-lambda-basics/",
        "teaser": null
      },{
        "title": "Lambda reduction",
        "excerpt":"Reduce the following lambda expressions as much as possible:   \\[\\begin{gather*} (\\x.a') b' \\\\ (\\x.p'x \\to \\E x.r'b'\\, x) a'\\\\ (\\x\\x.p'x \\to q'x\\,c') a'\\, b'\\\\ (\\x\\E y.r'x\\,y)y \\end{gather*}\\] ","categories": [],
        "tags": [],
        "url": "/items/ex-lambda-reduction/",
        "teaser": null
      },{
        "title": "Logical relations",
        "excerpt":"For each pair, determine the logical relation between the left and right formulas (implies, contradicts, or independent): \\[\\begin{gather} \\forall x.\\con{p}x\\rightarrow \\con{q}x&amp; \\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x\\rightarrow \\con{q}x&amp; \\exists x.\\con{q}x\\\\ \\exists x.\\con{p}x\\wedge \\con{q}x&amp; \\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x &amp;\\exists x.\\con{p}x\\\\ \\neg\\exists x\\,\\con{r}x&amp; \\forall x.\\neg\\con{r}x\\\\ \\forall x.\\con{p}x\\land\\con{r}x&amp; \\forall x.\\con{p}x\\rightarrow \\con{r}x\\\\ \\forall x.\\con{p}x\\land\\con{r}x&amp; \\forall x.\\con{p}x...","categories": [],
        "tags": [],
        "url": "/items/ex-logical-relations/",
        "teaser": null
      },{
        "title": "Model building",
        "excerpt":"Build a model with exactly three individuals where the following are all true: \\[\\exists x\\,\\con{student}x\\] \\[\\exists x\\,\\con{linguist}x\\] \\[\\neg\\forall x\\,\\con{student}x\\] \\[\\exists x(\\con{student}x\\wedge \\con{linguist}x)\\] \\[\\exists x\\exists y\\, \\con{admire}(x,y)\\] Build a model where the following set is inconsistent, and explain why: \\[\\forall x(\\con{student}x\\rightarrow \\con{read}(x,b))\\] \\[\\exists x\\,\\con{student}x\\] \\[\\forall x\\,\\neg \\con{read}(x,b)\\] Build a model where...","categories": [],
        "tags": [],
        "url": "/items/ex-model-building/",
        "teaser": null
      },{
        "title": "Model theory basics",
        "excerpt":"State whether each atomic formula is true or false in : \\[\\begin{gather*} \\con{student}\\con{anna}\\\\ \\con{book}\\con{anna}\\\\ \\con{linguist}\\con{cara}\\\\ \\con{admire}\\con{ben}\\con{anna}\\\\ \\con{admire}\\con{anna}\\con{ben}\\\\ \\end{gather*}\\] Evaluate the following formulas in . \\[\\begin{gather*} \\exists x.\\con{student}x\\\\ \\forall x.\\con{student}x \\rightarrow \\con{linguist}x\\\\ \\exists x.\\con{student}x \\land \\con{linguist}x\\\\ \\forall x.\\con{book}x \\rightarrow \\con{student}x\\\\ \\exists x\\forall y. \\con{admire}y\\cnct x\\\\ \\con{student}x\\\\ \\con{linguist}x\\\\ \\exists x.\\con{admire}x\\cnct y\\\\ \\end{gather*}\\]...","categories": [],
        "tags": [],
        "url": "/items/ex-model-theory-basics/",
        "teaser": null
      },{
        "title": "&quot;Telescope&quot; sentences",
        "excerpt":"You are given the following grammar: S -&gt; NP VP NP -&gt; Det N | Det N PP VP -&gt; V NP | VP PP PP -&gt; P NP Det -&gt; 'the' | 'a' N -&gt; 'dog' | 'owner' | 'leash' V -&gt; 'found' P -&gt; 'with' Draw all the...","categories": [],
        "tags": [],
        "url": "/items/ex-simple-pst/",
        "teaser": null
      },{
        "title": "Subcategorization",
        "excerpt":"You are given the following grammar: S -&gt; NP VP NP -&gt; Det N VP -&gt; V VP -&gt; V NP Det -&gt; 'every' | 'a' | 'the' | 'some' N -&gt; 'student' | 'professor' | 'dog' V -&gt; 'walks' | 'saw' | 'talks' Extend your grammar so that you...","categories": [],
        "tags": [],
        "url": "/items/ex-subcat/",
        "teaser": null
      },{
        "title": "Peano comparison",
        "excerpt":"Define functions peano_eq and peano_lt for equality and less-than comparison of peano objects.  ","categories": [],
        "tags": [],
        "url": "/items/ex-peano-comp/",
        "teaser": null
      },{
        "title": "Peano Division",
        "excerpt":"Define a function divmod which takes two peano objects a and b and returns a pair of peano objects (q, r) such that q is the quotient of a divided by b and r is the remainder. You can assume that b is not zero.  ","categories": [],
        "tags": [],
        "url": "/items/ex-peano-div/",
        "teaser": null
      },{
        "title": "A module for Peano arithmetic",
        "excerpt":"Write a module1 peano which implements the following functions: Name and type Description zero :: -&gt; peano Constructor for the zero of the system, i.e., returns None succ :: peano -&gt; peano Constructor for the rest zerop :: peano -&gt; bool Check whether the given peano object is zero (in...","categories": [],
        "tags": [],
        "url": "/items/ex-peano-module/",
        "teaser": null
      },{
        "title": "Peano power",
        "excerpt":"Define a function peano_power that raises its first argument to the power of the second, all in peano type.  ","categories": [],
        "tags": [],
        "url": "/items/ex-peano-pow/",
        "teaser": null
      },{
        "title": "Peano subtraction",
        "excerpt":"Define two function pred and sub for predecessor and subtraction, respectively. As we are modeling the natural numbers, the predecessor of zero is zero, and subtraction is truncated at zero. For example, sub(from_int(3), from_int(5)) should return from_int(0), not from_int(-2).  ","categories": [],
        "tags": [],
        "url": "/items/ex-peano-sub/",
        "teaser": null
      },{
        "title": "Flip",
        "excerpt":"Define flip(p) that returns True with probability p and False with probability (1-p). The only built-in you can use is random.random: &gt;&gt;&gt; import random &gt;&gt;&gt; random.random() # returns a number in [0,1) 0.4013560344771465 which returns a uniformly distributed number in the interval [0,1). You cannot specify any parameters to random.random()....","categories": [],
        "tags": [],
        "url": "/items/ex-flip/",
        "teaser": null
      },{
        "title": "Geometric",
        "excerpt":"Define a recursive function geometric(p) that flips with probability p until it succeeds and returns the number of failed trials before that.  ","categories": [],
        "tags": [],
        "url": "/items/ex-geometric-rec/",
        "teaser": null
      },{
        "title": "Inspection batch",
        "excerpt":"A batch of one hundred items is inspected by testing four randomly selected items. If one of the four is defective, the batch is rejected. What is the probability that the batch is accepted if it contains five defectives?  ","categories": [],
        "tags": [],
        "url": "/items/ex-inspection-batch/",
        "teaser": null
      },{
        "title": "King's sibling",
        "excerpt":"The king has only one sibling. What is the probability that the sibling is male? Assume that every birth results in a boy with probability 1/2, independent of other births. Be careful to state any additional assumptions you have to make in order to arrive at an answer.  ","categories": [],
        "tags": [],
        "url": "/items/ex-kings-sibling/",
        "teaser": null
      },{
        "title": "Optimum order",
        "excerpt":"You enter a special kind of chess tournament, in which you play one game with each of three opponents, but you get to choose the order in which you play your opponents, knowing the probability of a win against each. You win the tournament if you win two games in...","categories": [],
        "tags": [],
        "url": "/items/ex-middle-best/",
        "teaser": null
      },{
        "title": "More heads for Bob",
        "excerpt":"Alice and Bob have \\(2 n + 1\\) coins, each coin with probability of heads equal to \\(1/2\\). Bob tosses \\(n+1\\) coins, while Alice tosses the remaining \\(n\\) coins. Assuming independent coin tosses, show that the probability that after all coins have been tossed, Bob will have gotten more heads...","categories": [],
        "tags": [],
        "url": "/items/ex-more-heads/",
        "teaser": null
      },{
        "title": "The prisoner's dilemma",
        "excerpt":"The release of two out of three prisoners has been announced, but their identity is kept secret. One of the prisoners considers asking a friendly guard to tell him who is the prisoner other than himself that will be released, but hesitates based on the following rationale: at the prisoner’s...","categories": [],
        "tags": [],
        "url": "/items/ex-prisoners-dilemma/",
        "teaser": null
      },{
        "title": "A question of independence",
        "excerpt":"You are given the following state space with the probabilities of the corresponding events:      If you receive the information that event \\(A\\) and \\(B\\) are independent, what can you say, if anything, about the relation between the probability mass terms \\(x,y,z,t\\)?  ","categories": [],
        "tags": [],
        "url": "/items/ex-question-of-independence/",
        "teaser": null
      },{
        "title": "Recursive jar",
        "excerpt":"Two players take turns removing a ball from a jar that initially contains \\(m\\) white and \\(n\\) black balls. The first player to remove a white ball wins. Develop a recursive formula that allows the convenient computation of the probability that the starting player wins.  ","categories": [],
        "tags": [],
        "url": "/items/ex-recursive-jar/",
        "teaser": null
      },{
        "title": "Recursive jars",
        "excerpt":"Each of k jars contains m white and n black balls. A ball is randomly chosen from jar 1 and transferred to jar 2, then a ball is randomly chosen from jar 2 and transferred to jar 3, etc. Finally, a ball is randomly chosen from jar k. Show that...","categories": [],
        "tags": [],
        "url": "/items/ex-recursive-jars/",
        "teaser": null
      },{
        "title": "Rolex",
        "excerpt":"Suppose that we have found that the word “Rolex” occurs in 250 of 2000 messages known to be spam and in 5 of 1000 messages known not to be spam. Estimate the probability that an incoming message containing the word “Rolex” is spam, assuming that it is equally likely that...","categories": [],
        "tags": [],
        "url": "/items/ex-rolex/",
        "teaser": null
      },{
        "title": "Second roll",
        "excerpt":"You roll a 6-sided dice once; only if the outcome is even, you roll it for a    second time. What is the probability that you roll a 6 on the second roll?  ","categories": [],
        "tags": [],
        "url": "/items/ex-second-throw/",
        "teaser": null
      },{
        "title": "Strange Bob",
        "excerpt":"Bob has a peculiar pair of three-sided dice. When he rolls the dice, the probability of any particular outcome is proportional to the product of the outcome of each die. All outcomes that result in a particular product are equally likely. a. What is the probability of the product being...","categories": [],
        "tags": [],
        "url": "/items/ex-strange-bob/",
        "teaser": null
      },{
        "title": "Swap game",
        "excerpt":"We have two jars, each initially containing an equal number of balls. We perform four successive ball exchanges. In each exchange, we pick simultaneously and at random a ball from each jar and move it to the other jar. What is the probability that at the end of the four...","categories": [],
        "tags": [],
        "url": "/items/ex-swap-game/",
        "teaser": null
      },{
        "title": "Two envelopes",
        "excerpt":"You are handed two envelopes, and you know that each contains a positive integer dollar amount and that the two amounts are different. The values of these two amounts are modeled as constants that are unknown. Without knowing what the amounts are, you select at random one of the two...","categories": [],
        "tags": [],
        "url": "/items/ex-two-envelopes/",
        "teaser": null
      },{
        "title": "The unfair coin",
        "excerpt":"You need to make a toss with equal chance for heads and tails, but you have a coin that you know is biased, but don’t know by how much and in which way. Using only this biased coin, design an experiment that is equivalent to making a fair toss. You...","categories": [],
        "tags": [],
        "url": "/items/ex-unfair-coin/",
        "teaser": null
      },{
        "title": "Definitons over Venn",
        "excerpt":"Here is the depiction of the sample space of a probabilistic model, where the reals \\(x,y,z,t &gt; 0\\) indicate the probability mass of the corresponding regions. Note that they are not probabilities themselves, they are only proportional to the probabilities of the corresponding events. Indicate the following probabilities in terms...","categories": [],
        "tags": [],
        "url": "/items/ex-venn-for-cond/",
        "teaser": null
      },{
        "title": "Deep count",
        "excerpt":"Given a possibly nested sequence and an item, count the occurrences of the item in the sequence.   For instance given,  [1, [2, 3], 4, [5, [6, 4]]]   you should be able to count 2 occurrences of 4.  ","categories": [],
        "tags": [],
        "url": "/items/ex-deep-count/",
        "teaser": null
      },{
        "title": "Flatten",
        "excerpt":"Map a possibly nested sequence to its flattend version, which comprises only the ground element. For example, the sequence   [1, [2, 3], 4, [5, [6, 7]]]   should be mapped to   [1, 2, 3, 4, 5, 6, 7]  ","categories": [],
        "tags": [],
        "url": "/items/ex-flatten/",
        "teaser": null
      },{
        "title": "Length",
        "excerpt":"Find the length of a given sequence.  ","categories": [],
        "tags": [],
        "url": "/items/ex-length/",
        "teaser": null
      },{
        "title": "Deep Max",
        "excerpt":"Define a recursive procedure that finds the maximum integer in a possibly nested list of integers.  ","categories": [],
        "tags": [],
        "url": "/items/ex-max/",
        "teaser": null
      },{
        "title": "Maximum depth",
        "excerpt":"Given a possibly nested list, compute the deepest level of embedding in the list. The ground level counts as 0 depth. For example, the list T  [1, [2, 3], 4, [5, [6, 7]]]   should return 2.   ","categories": [],
        "tags": [],
        "url": "/items/ex-maxdepth/",
        "teaser": null
      },{
        "title": "Index",
        "excerpt":"Write a function that takes an object and a sequence and returns the index of the item in the sequence, starting from 0. If the item does not occur in the sequence, return -1.  ","categories": [],
        "tags": [],
        "url": "/items/ex-member-index/",
        "teaser": null
      },{
        "title": "Member",
        "excerpt":"Given an item and a sequence, tell whether the item is in the sequence or not.  ","categories": [],
        "tags": [],
        "url": "/items/ex-member/",
        "teaser": null
      },{
        "title": "Permutation",
        "excerpt":"Compute the permutations of a list or string.   ","categories": [],
        "tags": [],
        "url": "/items/ex-permutation/",
        "teaser": null
      },{
        "title": "Power set",
        "excerpt":"Given a set of items provided as a list, write a function that returns the power set of the given set.  ","categories": [],
        "tags": [],
        "url": "/items/ex-powerset/",
        "teaser": null
      },{
        "title": "",
        "excerpt":"          ","categories": [],
        "tags": [],
        "url": "/items/tr-mts-1/",
        "teaser": null
      },{
        "title": "",
        "excerpt":"          ","categories": [],
        "tags": [],
        "url": "/items/tr-mts-2/",
        "teaser": null
      },{
        "title": "",
        "excerpt":"          ","categories": [],
        "tags": [],
        "url": "/items/tr-mts-3/",
        "teaser": null
      },{
        "title": "",
        "excerpt":"          ","categories": [],
        "tags": [],
        "url": "/items/tr-mts-4/",
        "teaser": null
      },{
        "title": "",
        "excerpt":"          ","categories": [],
        "tags": [],
        "url": "/items/tr-mts-5/",
        "teaser": null
      },{
        "title": "Zero property of multiplication",
        "excerpt":"Given any number \\(n\\) you can write it as an addition of \\(n\\) number of \\(1\\)’s: \\[n = 1 + 1 + \\cdots + 1 (n\\text{ times})\\] Therefore, we have: \\[n\\times 0 = (1 + 1 + \\cdots + 1)\\times 0\\] By distributivity of multiplication over addition, we have: \\[n\\times...","categories": [],
        "tags": [],
        "url": "/items/pr-mult-zero/",
        "teaser": null
      },{
        "title": "Zero property of multiplication",
        "excerpt":"For any number \\(n\\), we have \\(n \\times 0 = 0\\).  ","categories": [],
        "tags": [],
        "url": "/items/th-mult-zero/",
        "teaser": null
      },{
        "title": "Insertion",
        "excerpt":"Define a function myinsert(seq,index,item) that inserts item at position index of the list seq and returns the new list. def myinsert(seq, index, item): \"\"\"Insert item at index of seq. &gt;&gt;&gt; myinsert([1, 2, 3], 1, 4) [1, 4, 2, 3] &gt;&gt;&gt; myinsert([1, 2, 3], 5, 4) [1, 2, 3] &gt;&gt;&gt; myinsert([True,...","categories": [],
        "tags": [],
        "url": "/items/ex-insert/",
        "teaser": null
      },{
        "title": "Summation",
        "excerpt":"Define a function mysum(seq) that returns the sum of all numbers in the list seq. def mysum(seq): \"\"\"Return the sum of all numbers in seq. In: seq - a sequnce of summable items Out: sum of all items in seq \"\"\" Library x = [1,2,3,4] sum = sum(x) print(sum) #...","categories": [],
        "tags": [],
        "url": "/items/ex-sum/",
        "teaser": null
      },{
        "title": "Total Probability",
        "excerpt":"Given that the collection \\(A_i\\) is a parition of \\(\\Omega\\), for any set \\(B\\subseteq \\Omega\\), \\[B = \\bigcup_{i}^{} A_i \\cap B\\] Also thanks to \\(A_i\\)’s partitioning \\(\\Omega\\), the sets that constitue \\(B\\) as above are mutually exclusive. Given this, by the additivity axiom of probability, we have: \\[P(B) = \\sum_{i}^{}...","categories": [],
        "tags": [],
        "url": "/items/pr-total-probability/",
        "teaser": null
      },{
        "title": "Peano Axioms",
        "excerpt":"The set of natural numbers \\(\\mathbb{N}\\) is defined as follows:1 \\(0 \\in \\mathbb{N}\\). \\(\\forall x. x\\in \\mathbb{N} \\to s(x) \\in \\mathbb{N}\\). \\(\\neg\\exists x\\in\\mathbb{N}. s(x) = 0\\). \\(\\forall x,y\\in\\mathbb{N}. s(x) = s(y) \\to x = y\\). Let \\(\\phi\\) be a unary predicate: \\[\\begin{align*} [\\phi(0)\\land \\forall x\\in\\mathbb{N}. \\phi(x)\\to\\phi(s(x))] \\to \\forall y\\in \\mathbb{N}.\\phi(y)...","categories": [],
        "tags": [],
        "url": "/items/ax-peano-0/",
        "teaser": null
      },{
        "title": "Number",
        "excerpt":"\\(1\\) is a number. If \\(n\\) is a number, then so is \\(s(n)\\). There is no number \\(n\\) such that \\(s(n) = 1\\). Given any two numbers \\(n\\) and \\(m\\), if \\(s(n) = s(m)\\) then \\(n = m\\). If a set \\(X\\) of numbers contains \\(1\\) and is closed1 under...","categories": [],
        "tags": [],
        "url": "/items/ax-peano-1/",
        "teaser": null
      },{
        "title": "Bayes' Theorem",
        "excerpt":"Given a sample space \\(\\Omega\\), with events \\(A_1,...,A_n \\subseteq \\Omega\\) forming a partition of \\(\\Omega\\), with \\(P(A_i) &gt; 0\\) for all \\(i\\leq n\\), and an event \\(B \\subseteq \\Omega\\), such that \\(P(B) &gt; 0\\): \\[\\begin{align*} P(A_i\\given B) &amp;= \\frac{P(A_i)P(B\\given A_i)}{P(B)} \\\\ &amp; = \\frac{P(A_i)P(B\\given A_i)}{P(A_1)P(B\\given A_1) + \\cdots + P(A_n)P(B\\given...","categories": [],
        "tags": [],
        "url": "/items/th-bayes/",
        "teaser": null
      },{
        "title": "Total Probability",
        "excerpt":"Let a collection of sets \\(\\mathcal{A}= \\lbrace A_i:A_i \\subseteq \\Omega\\rbrace\\) be such that,      each \\(x\\in \\Omega\\) occurs in exactly one \\(A_i \\in \\mathcal{A}\\) (partition);   and  \\(P(A_i) &gt; 0\\) for each \\(A_i\\in\\mathcal{A}\\),   then for any event \\(B\\subseteq \\Omega\\):   \\[P(B) = \\sum_{i}^{} P(A_i \\cap B) = \\sum_{i}^{}{P(B\\given A_i) P(A_i)}\\]  ","categories": [],
        "tags": [],
        "url": "/items/th-total-probability/",
        "teaser": null
      },{
        "title": "Iteration by `while`",
        "excerpt":"Let’s start with a simple function defined over integers called the Collatz function \\(C\\). \\[C(n) = \\begin{cases} \\frac{n}{2} &amp; \\text{if } n \\text{ is even}\\\\ 3n + 1 &amp; \\text{if } n \\text{ is odd} \\end{cases}\\] Collatz’ conjecture states that for any positive integer \\(n\\), repeated application of \\(C\\) will...","categories": ["course"],
        "tags": ["iteration"],
        "url": "/posts/course/iteration-by-while/",
        "teaser": null
      },{
        "title": "Higher order functions",
        "excerpt":"Remember our earlier discussion of Collatz function and sequences. Here is our task: Task: Given a positive integer \\(n\\), find the largest integer in the Collatz sequence seeded by \\(n\\).1 By now, the task should be a piece of cake for you. Is it? Try and see before proceeding. Here...","categories": ["course"],
        "tags": ["programming","funprog"],
        "url": "/posts/course/higher-order-functions/",
        "teaser": null
      },{
        "title": "Euclid's Algorithm",
        "excerpt":"Check: Make sure you are fine with very basic number theory. Definition (greatest common divisor) Given two integers \\(a\\) and \\(b\\), the greatest common divisor (GCD) of \\(a\\) and \\(b\\), denoted by \\(\\gcd(a,b)\\), is the largest integer that divides both \\(a\\) and \\(b\\). Euclid’s algorithm (300 BC) which computes the...","categories": ["course"],
        "tags": ["algorithms","iteration","proof","discrete","number theory"],
        "url": "/posts/course/euclids-algorithm/",
        "teaser": null
      },{
        "title": "Very basic number theory",
        "excerpt":"This is a healthy minimum dose of number theory to make you feel comfortable with the concepts we will be using in this course. We do not start from the absolute beginning. We take for granted integers and arithmetic operations. We start by some terminology. The set of integers, denoted...","categories": ["course"],
        "tags": ["discrete","proof","number theory"],
        "url": "/posts/course/intro-number-theory/",
        "teaser": null
      },{
        "title": "The power of the state",
        "excerpt":"Computation can be thought of as a sequence of states, where there is a meaningful relation between the initial and the final state. Think of summing the first \\(n\\) positive integers. One strategy is to start with an empty store (or accumulator), and (i) either adding \\(n\\), then \\(n-1\\), and...","categories": ["course"],
        "tags": ["programming","tuples"],
        "url": "/posts/course/state-power/",
        "teaser": null
      },{
        "title": "The way of lambda",
        "excerpt":"When I say “Call a plumber”, you need to know the meaning of “plumber” and “call”, and enough English syntax to be able to execute the command. In case you know what “call” means but not “plumber”, you consult a dictionary before you are ready to execute the command. I...","categories": ["course"],
        "tags": ["programming","lambda","if expression","funprog"],
        "url": "/posts/course/way-of-lambda/",
        "teaser": null
      },{
        "title": "More state power",
        "excerpt":"Prerequisites: The power of the state and The way of lambda We fortified our proc_seq with tuples to keep track of multiple state variables. We scan through a sequence of numbers that proceeds according to a given rule, keeping track of various properties of the sequence, like what is the...","categories": ["course"],
        "tags": ["programming","dictionary","lists"],
        "url": "/posts/course/more-state-power/",
        "teaser": null
      },{
        "title": "Assignment in lambda expressions",
        "excerpt":"We closed the post More state power with a function that collects n random numbers between start and end into a list. Here is the function again: def n_uniq_random(n, start, end): \"\"\"Return a list of n unique random numbers between start and end. \"\"\" from random import randint from funcutils...","categories": ["course"],
        "tags": ["programming","functional programming","cogs501","lambda"],
        "url": "/posts/course/walrus-operator/",
        "teaser": null
      },{
        "title": "Language primer",
        "excerpt":"This is a quick start on langugage for cognitive science students. A simple formal system Douglas Hofstadter1 has this tiny formal system called pq-System. In defining formal systems, we start with a set of symbols, called the alphabet. This dictates that any expression of the system must be made by...","categories": ["course"],
        "tags": ["language","cogsci"],
        "url": "/posts/course/language-primer/",
        "teaser": null
      },{
        "title": "Model-theoretic interpretation",
        "excerpt":"Introduction Model-theoretic semantics in linguistics aims to define correspondences between the expressions of a language and objects that are external to that language. To give a very simple example: assume you and I have a silly code between us, according to which, during the normal course of my speaking whenever...","categories": ["course"],
        "tags": ["language","semantics"],
        "url": "/posts/course/model-theoretic-interpretation/",
        "teaser": null
      },{
        "title": "Mts T1",
        "excerpt":"\\begin{tikzpicture}[scale=1.5] \t\\Tree [.\\sysm{(loves'\\cnct x)_{\\Tet}}    \t\t\t\t$\\tcon{loves}{\\Teet}$  \t\t\t\t$x_{e}$ ] \\end{tikzpicture} ","categories": [],
        "tags": [],
        "url": "/tikz/mts-t1/",
        "teaser": null
      },{
        "title": "Mts T2",
        "excerpt":"\\begin{tikzpicture}[scale=1.5]  \t\\Tree [.\\sysm{((loves'\\cnct x)\\cnct mary')_{t}} [.\\sysm{(loves'\\cnct x)_{\\Tet}}    \t\t\t\t$\\tcon{loves}{\\Teet}$  \t\t\t\t$x_{e}$ ]  \t\t\t  [.\\sysm{\\tcon{mary}{e}} ] \t] \\end{tikzpicture} ","categories": [],
        "tags": [],
        "url": "/tikz/mts-t2/",
        "teaser": null
      },{
        "title": "Prisoners Dilemma",
        "excerpt":"\\begin{tikzpicture}[ every node/.style={inner sep=2pt}, edge/.style={draw, -latex} ] % Root \\node (root) at (0,0) {}; % Level 1 nodes \\node (A) at (2, -3) {$C$}; \\node (B) at (2, 0) {$B$}; \\node (C) at (2, 3) {$A$}; % Level 2 nodes under A \\node (AgB) at (4, -3.75) {$G_C$}; \\node (AgC)...","categories": [],
        "tags": [],
        "url": "/tikz/prisoners-dilemma/",
        "teaser": null
      },{
        "title": "Tk Mts 3",
        "excerpt":"\\begin{tikzpicture}[scale=1.5] \\Tree [.\\sysm{(\\forall x ((loves'\\cnct x)\\cnct mary'))_{t}} \t\t  [.\\sysm{\\forall x} \\sysm{\\forall} \\sysm{x_{e}} ]  \t      [.\\sysm{((loves'\\cnct x)\\cnct mary')_{t}} [.\\sysm{(loves'\\cnct x)_{\\Tet}}    \t\t\t\t$\\tcon{loves}{\\Teet}$  \t\t\t\t$x_{e}$ ]  \t\t\t  [.\\sysm{\\tcon{mary}{e}} ] \t] ] \\end{tikzpicture} ","categories": [],
        "tags": [],
        "url": "/tikz/tk-mts-3/",
        "teaser": null
      },{
        "title": "Tk Mts 4",
        "excerpt":"\\begin{tikzpicture} \\Tree [.\\sysm{(\\forall x ((\\cond ((loves'\\cnct x)\\cnct mary')) (\\exists y (broken'\\cnct y))))_{t}} [.\\sysm{\\forall x} \\sysm{\\forall} \\sysm{x_{e}} ] [.\\sysm{((\\cond ((loves'\\cnct x)\\cnct mary')) (\\exists y (broken'\\cnct y)))_{t}} [.\\sysm{(\\cond ((loves'\\cnct x)\\cnct mary'))_{\\smtyp{t}{t}}} \\sysm{\\cond_{\\smtyp{t}{\\smtyp{t}{t}}}} [.\\sysm{((loves'\\cnct x)\\cnct mary')_{t}} [.\\sysm{(loves'\\cnct x)_{\\Tet}} $\\tcon{loves}{\\Teet}$ $x_{e}$ ] [.\\sysm{\\tcon{mary}{e}} ] ] ] [.\\sysm{(\\exists y (broken'\\cnct y))_{t}} [.\\sysm{\\exists y} \\sysm{\\exists} \\sysm{y_{e}}...","categories": [],
        "tags": [],
        "url": "/tikz/tk-mts-4/",
        "teaser": null
      },{
        "title": "Tk Mts 5",
        "excerpt":"\\begin{tikzpicture} \\Tree [.\\sysm{\\forall x (\\cond (loves' x\\cnct mary')\\cnct (\\exists y (broken' y)))} [.\\sysm{\\forall x} \\sysm{\\forall} \\sysm{x_{e}} ] [.\\sysm{\\cond (loves' x\\cnct mary')\\cnct (\\exists y (broken' y))} [.\\sysm{\\cond (loves' x\\cnct mary')} \\sysm{\\cond_{\\smtyp{t}{\\smtyp{t}{t}}}} [.\\sysm{loves'\\cnct x\\cnct mary'} [.\\sysm{loves' x} $\\tcon{loves}{\\Teet}$ $x_{e}$ ] [.\\sysm{\\tcon{mary}{e}} ] ] ] [.\\sysm{\\exists y (broken' y)} [.\\sysm{\\exists y} \\sysm{\\exists} \\sysm{y_{e}}...","categories": [],
        "tags": [],
        "url": "/tikz/tk-mts-5/",
        "teaser": null
      },{
        "title": "Two Envelopes",
        "excerpt":"\\begin{tikzpicture}[x=2.2cm,y=1.3cm,>=latex] % Root \\node (R) at (0,0) {}; % Level 1: 2 branches \\node (A1) at (1, 1.5) {$S$}; \\node (A2) at (1, -1.5) {$\\neg S$}; \\draw[->] (R) -- (A1) node[midway, sloped, above] {$\\frac{1}{2}$}; \\draw[->] (R) -- (A2) node[midway, sloped, above] {$\\frac{1}{2}$}; % Level 2: each of the above has...","categories": [],
        "tags": [],
        "url": "/tikz/two-envelopes/",
        "teaser": null
      },{
        "title": "Venn For Cond",
        "excerpt":"\\begin{tikzpicture}[scale=1.0] % Rectangle and its label inside, top-left \\draw (-3,-2) rectangle (3,2); \\node[anchor=north west] at (-3,2) {$U$}; % Circles \\draw (-1,0) circle (1.5); \\draw ( 1,0) circle (1.5); % Labels A and B outside using polar-style coordinates % radius 1.6, angle 140° for A (10 o'clock-ish) \\node at ({-1 +...","categories": [],
        "tags": [],
        "url": "/tikz/venn-for-cond/",
        "teaser": null
      },{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "https://umutozge.github.io/404.html"
  },{
    "title": "About",
    "excerpt":"Tempor velit sint sunt ipsum tempor enim ad qui ullamco. Est dolore anim ad velit duis dolore minim sunt aliquip amet commodo labore. Ut eu pariatur aute ea aute excepteur laborum. Esse ea esse excepteur minim mollit qui cillum excepteur ex dolore magna. Labore deserunt fugiat incididunt incididunt sint ea....","url": "https://umutozge.github.io/about/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "https://umutozge.github.io/categories/"
  },{
    "title": "Code browser",
    "excerpt":"Language: Any Python Haskell Type: Any Module Snippet collatz python · module Various goodies related to Collatz conjecture. funcutils python · module A utility module for functional abstractions. Files python · snippet Working with files in Python. Plotting python · snippet Plotting in Python. A sequence processor python · module...","url": "https://umutozge.github.io/code/browser/"
  },{
    "title": "Exercise browser",
    "excerpt":"discrete 2 funprog 1 grammar 1 iteration 1 language 3 linear algebra 1 lists 1 logic 1 number theory 2 parsing 1 probability 3 programming 1 proof 1 python 3 recursion 2 semantics 1 sequence 1 sets 1 tuples 1 typing 1 Basic probability Probability exercises. Combinatorics Various counting exercises....","url": "https://umutozge.github.io/exercise/browser/"
  },{
    "title": "COGS 543",
    "excerpt":"Spring 2026 Umut Özge (✉️) , Anıl Öğdül (TA, ✉️) ⏰ W 2:40-5:30, II04 Check the current syllabus for course information and policies. Some exercises on this course may require some helper code. Please visit coursepy on how to get and install the helper code. Make sure you are on...","url": "https://umutozge.github.io/cl/schedule/"
  },{
    "title": "COGS 502",
    "excerpt":"Spring 2026 Umut Özge (✉️) , İlteriş Bozkurt (TA, ✉️) ⏰ T 2:40-5:30, II03 Check the current syllabus for course information and policies. Some exercises on this course may require some helper code. Please visit coursepy on how to get and install the helper code. Make sure you are on...","url": "https://umutozge.github.io/prelim/schedule/"
  },{
    "title": "COGS 526",
    "excerpt":"Spring 2026 Umut Özge (✉️), Anıl Öğdül (TA, ✉️) 🕐 W 2:40-5:30, II04 Check the current syllabus for course information and policies. Make sure you are on odtuclass to get announcements and updates. ✳️ marks optional material. Week Content 1&nbsp;(18/2) Why logic is still relevant for cognitive science and AI...","url": "https://umutozge.github.io/courses/lccm/schedule/"
  },{
    "title": "COGS 526 Meaning and Logic",
    "excerpt":"Course information The course aims to provide fundamental knowledge and skills for applying logic in computational cognitive modeling. Prerequisites The course is open, without any prerequisites, to any graduate student, with Cogsci first, Informatics second, and the rest third priority. Material The relevant material on this site. Weekly reading assignments....","url": "https://umutozge.github.io/lccm/syllabus/"
  },{
    "title": "COGS 543 Computational Semantics",
    "excerpt":"Course information The course is an introduction to computational approaches to representing and processing meaning in natural language. The course takes a scientific perspective on the subject and focuses on interpretable models that potentially have cognitive plausiblity. If you are interested rather in the engineering field of NLP and state-of-the-art...","url": "https://umutozge.github.io/cl/syllabus/"
  },{
    "title": "Syllabus for COGS 501/2",
    "excerpt":"Course Information These courses aim to introduce graduate students in cognitive science to the mathematical and computational foundations that are necessary for advanced study in cognitive science. The mathematical topics covered at a basic level are, sets, relations, functions, logic, combinatorics, number theory, probability, linear algebra, and calculus. A functional...","url": "https://umutozge.github.io/prelim/syllabus/"
  },{
    "title": "Posts by Tag",
    "excerpt":" ","url": "https://umutozge.github.io/tags-old/"
  },{
    "title": "Posts by Year",
    "excerpt":" ","url": "https://umutozge.github.io/posts/"
  },{
    "title": "A very short introduction to CCG",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/shortccg/"
  },{
    "title": "Lambda Calculator",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/lambdacalculator/"
  },{
    "title": "Discrete Mathematics and Its Applications",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/rosen/"
  },{
    "title": "A repo for course related code",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/coursepy/"
  },{
    "title": "Probabilistic Systems Analysis and Applied Probability",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/bertsekas-course/"
  },{
    "title": "I don\\'t believe in word senses",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/kilgarriff/"
  },{
    "title": "Mathematics: A Very Short Introduction",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/gowers-math/"
  },{
    "title": "Word meaning in minds and machines",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/lake-word-meaning/"
  },{
    "title": "Introduction to Natural Language Processing",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/eisenstein/"
  },{
    "title": "The great number crunch",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/yang-crunch/"
  },{
    "title": "No Free Lunch in Linguistics Or Machine Learning: Response to Pater",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/rawski-heins/"
  },{
    "title": "Generative Linguistics and Neural Networks at 60: Foundation, Friction, and Fusion",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/pater-2019/"
  },{
    "title": "Statistical Modeling: The Two Cultures",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/breiman-2001/"
  },{
    "title": "Probabilistic Modeling in Psycholinguistics: Linguistic Comprehension and Production",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/jurafsky-psycho/"
  },{
    "title": "Probabilistic Syntax",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/manning-prob/"
  },{
    "title": "Chomsky and the Two Cultures of Statistical Learning",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/norvig-chomsky/"
  },{
    "title": "Machine learning theory and practice as a source of insightinto universal grammar",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/lappin-shieber/"
  },{
    "title": "Linguistic Fundamentals for Natural Language Processing",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/bender-fundamentals/"
  },{
    "title": "The softmax function: Properties, motivation, and interpretation",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/softmax/"
  },{
    "title": "SEP: Computational Linguistics",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/stanford-cl/"
  },{
    "title": "Syntactic Structures",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/chomsky-ss/"
  },{
    "title": "Formal grammar and information theory: together again?",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/pereira/"
  },{
    "title": "Introduction to Probability",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/bertsekas/"
  },{
    "title": "Building Machines That Learn and Think like People",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/lake/"
  },{
    "title": "Neuro-symbolic artificial intelligence: a survey",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/bhuyan/"
  },{
    "title": "Artificial Intelligence: A Modern Approach",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/aima/"
  },{
    "title": "Logic in Computer Science: Modelling and Reasoning about Systems",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/huth-ryan/"
  },{
    "title": "Reasoning with quantifiers",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/geurts-logic/"
  },{
    "title": "Some philosophical problems from the standpoint of artificial intelligence",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/mccarthy-hayes/"
  },{
    "title": "Circumscription: a form of non-monotonic reasoning",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/circum/"
  },{
    "title": "A logic for default reasoning",
    "excerpt":"        {{ page.title }}        ","url": "https://umutozge.github.io/p/reiter-default/"
  },{
    "title": "Solution: Grammar for arithmetic",
    "excerpt":"```python from coursepy.lang.parsing import make_parser, make_cfg grammar_text=\"\"\" E -> E O E E -> LP E RP E -> '1'|'2'|'3'|'4' O -> '+'|'*' LP -> '(' RP -> ')' \"\"\" parser = make_parser(make_cfg(grammar_text)) for e in \"3 + 4,3 + 4 * 2,( 3 + 4 ) * 2\".split(\",\"): print(f\"Parse(s)...","url": "https://umutozge.github.io/solutions/ex-arithmetic-grammar/"
  },{
    "title": "Solution: FOL basics",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-fol-basics/"
  },{
    "title": "Solution: Lambda calculus basics",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-lambda-basics/"
  },{
    "title": "Solution: Lambda reduction",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-lambda-reduction/"
  },{
    "title": "Solution: Logical relations",
    "excerpt":"All the answers are given under the assumption that no model can have an empty domain. $$ \\begin{gather} \\forall x.\\con{p}x\\rightarrow \\con{q}x&\\not\\models &\\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x\\rightarrow \\con{q}x&\\not\\models & \\exists x.\\con{q}x\\\\ \\exists x.\\con{p}x\\wedge \\con{q}x&\\models & \\exists x.\\con{p}x\\\\ \\forall x.\\con{p}x &\\models &\\exists x.\\con{p}x\\\\ \\neg\\exists x\\,\\con{r}x&\\models & \\forall x.\\neg\\con{r}x\\\\ \\forall x.\\con{p}x\\land\\con{r}x&\\not\\models & \\forall x.\\con{p}x\\rightarrow...","url": "https://umutozge.github.io/solutions/ex-logical-relations/"
  },{
    "title": "Solution: Model building",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-model-building/"
  },{
    "title": "Solution: Model theory basics",
    "excerpt":"@@item|eg-simple-model|raw=true@@ 1. State whether each atomic formula is true or false in @@xref|eg-simple-model@@: $$ \\begin{gather*} \\con{student}\\con{anna}\\quad\\checkmark \\\\ \\con{book}\\con{anna}\\quad\\times\\\\ \\con{linguist}\\con{cara}\\quad\\checkmark\\\\ \\con{admire}\\con{ben}\\con{anna}\\quad\\checkmark\\\\ \\con{admire}\\con{anna}\\con{ben}\\quad\\times\\\\ \\end{gather*} $$ 1. Evaluate the following formulas in @@xref|eg-simple-model@@. $$ \\begin{gather*} \\interp{\\exists x.\\con{student}x} = 1\\\\ \\interp{\\forall x.\\con{student}x \\rightarrow \\con{linguist}x} = 0\\\\ \\interp{\\exists x.\\con{student}x \\land \\con{linguist}x} = 1\\\\ \\interp{\\forall x.\\con{book}x...","url": "https://umutozge.github.io/solutions/ex-model-theory-basics/"
  },{
    "title": "Solution: &quot;Telescope&quot; sentences",
    "excerpt":"```python from coursepy.lang.parsing import make_parser, make_cfg grammar_text = \"\"\" S -> NP VP NP -> Det N | Det N PP VP -> V NP | VP PP PP -> P NP Det -> 'the' | 'a' N -> 'dog' | 'owner' | 'leash' V -> 'found' P -> 'with'...","url": "https://umutozge.github.io/solutions/ex-simple-pst/"
  },{
    "title": "Solution: Subcategorization",
    "excerpt":"```python from coursepy.lang.parsing import make_parser, make_cfg ``` **Part 1:** Extend your grammar so that you can parse sentences like _Every student saw a dog with a telescope_, with its two readings (i.e., the one in which the dog has a telescope, and the one in which the student has a...","url": "https://umutozge.github.io/solutions/ex-subcat/"
  },{
    "title": "Solution: Peano comparison",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-peano-comp/"
  },{
    "title": "Solution: Peano Division",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-peano-div/"
  },{
    "title": "Solution: A module for Peano arithmetic",
    "excerpt":"It must be fairly straightforward to decide to start with the constructors. Define what is the base element in your system, and define how to construct other elements from this unique seed. One must, however, do this with some care. The correct approach is to first define the base element...","url": "https://umutozge.github.io/solutions/ex-peano-module/"
  },{
    "title": "Solution: Peano power",
    "excerpt":"  ```python from coursepy.math.peano import * ```    ```python def peano_pow(base, power):     assert peanop(base) and peanop(power)     if zerop(power):         return succ(zero())     else:         return  peano_mult(base, peano_pow(base, power[0])) ```           Back to exercise      Download .ipynb   Download .py   ","url": "https://umutozge.github.io/solutions/ex-peano-pow/"
  },{
    "title": "Solution: Peano subtraction",
    "excerpt":"  ```python from coursepy.math.peano import * ```    ```python def pred(a):     assert peanop(a)     if zerop(a):         return zero()     else:         return a[0] ```    ```python def peano_sub(a, b):     assert peanop(a) and peanop(b)     if zerop(b) or zerop(a):         return a     else:         return peano_sub(pred(a),pred(b)) ```           Back to exercise      Download .ipynb   Download .py   ","url": "https://umutozge.github.io/solutions/ex-peano-sub/"
  },{
    "title": "Solution: Flip",
    "excerpt":"All you can expect from Python is to generate for you a random number in $$[1,0)$$. In an unbiased `flip` all the shots of `random` below 0.5 would be `True` and above would be `False`, or vice versa. Now you can adjust the bias of the `flip` with the parameter...","url": "https://umutozge.github.io/solutions/ex-flip/"
  },{
    "title": "Solution: Geometric",
    "excerpt":"Assuming you have a flipping function like: ```python def flip(p): \"\"\"Return True with probability p\"\"\" from random import random return random() we can define a recursive function like: ```python def geometric(p): return 1 if flip(p) else 1 + geometric(p) ``` Let's play a little with our creation: ```python def test_geometric(p,...","url": "https://umutozge.github.io/solutions/ex-geometric-rec/"
  },{
    "title": "Solution: Inspection batch",
    "excerpt":"The batch gets accepted if the randomly selected four items are all from the 95 non-defective items. Thinking in terms of a sequential model avails us of using the multiplication rule. The probability we are interested in is, $$ P(\\text{accept}) = \\frac{95}{100} \\cdot \\frac{94}{99} \\cdot \\frac{93}{98} \\cdot \\frac{92}{97} \\approx 0.814...","url": "https://umutozge.github.io/solutions/ex-inspection-batch/"
  },{
    "title": "Solution: King's sibling",
    "excerpt":"Not an easy one.[^wiki] The answer depends on the way you clarify the underlying process. Is the process that produces the data equivalent to \"two tosses of a fair coin\"? If so, what is the equivalent of the information we have in the present problem in the coin-tossing experiment? Is...","url": "https://umutozge.github.io/solutions/ex-kings-sibling/"
  },{
    "title": "Solution: Optimum order",
    "excerpt":"Let's name the three opponents as 1, 2, and 3, and let $$p_i$$ be the probability of winning against opponent $$i$$. Let's also take, without loss of generality, $$p_1 \\leq p_2 \\leq p_3$$, meaning that opponent 3 is the weakest. For a given order of opponents $$o_1, o_2 , o_3...","url": "https://umutozge.github.io/solutions/ex-middle-best/"
  },{
    "title": "Solution: More heads for Bob",
    "excerpt":"There is an elegant solution to the problem, which is, at least for me, not easy to come by. I'll come back to it after I discuss my not-so-elegant solution. If you already discovered the \"harder\" solution, congratulate yourself, and feel free to ignore the rest of this page. There...","url": "https://umutozge.github.io/solutions/ex-more-heads/"
  },{
    "title": "Solution: The prisoner's dilemma",
    "excerpt":"Let's name the prisoners $$A$$, $$B$$ and $$C$$, where ours is $$A$$. The two possible responses of the guard are $$G_B$$ and $$G_C$$. The prisoner $$A$$ thinks that the probability that he will be released is $$P(A_r)=2/3$$. He also thinks that the probability that his chances of being released gets...","url": "https://umutozge.github.io/solutions/ex-prisoners-dilemma/"
  },{
    "title": "Solution: A question of independence",
    "excerpt":"Here is the state space again: ![State space]({% tikz_img venn-for-cond %}){:.centered-image} One common mistake is to infer that $$y=0$$, thinking that independent events do not intersect. The definition of independence is: $$P(A\\cap B) = P(A)\\cdot P(B)$$ Therefore the independence of $$A$$ and $$B$$ entails that: $$y\\cdot t = x\\cdot z$$...","url": "https://umutozge.github.io/solutions/ex-question-of-independence/"
  },{
    "title": "Solution: Recursive jar",
    "excerpt":"The critical point to recognize is that we need to look at the exact same event from different perspectives. Conceptually, there appears to be a single event, which is described as \"the starting player wins with initially $$m$$ white, and $$n$$ black balls\". The probability of this event can be...","url": "https://umutozge.github.io/solutions/ex-recursive-jar/"
  },{
    "title": "Solution: Recursive jars",
    "excerpt":"Let's concentrate what happens when we move from one jar to the next. Symbolically, $$ p(w,k+1) = p(w,k) \\cdot \\frac{m+1}{m+n+1} + (1 - p(w,k)) \\cdot \\frac{m}{m+n+1} $$ where $$p(w,k)$$ is the probability of drawing a white ball from the jar numbered $$k$$. We know that, $$ p(w,1) = \\frac{m}{m+n} $$...","url": "https://umutozge.github.io/solutions/ex-recursive-jars/"
  },{
    "title": "Solution: Rolex",
    "excerpt":"Suppose that we have found that the word “Rolex” occurs in 250 of 2000 messages known to be spam and in 5 of 1000 messages known not to be spam. Estimate the probability that an incoming message containing the word “Rolex” is spam, assuming that it is equally likely that...","url": "https://umutozge.github.io/solutions/ex-rolex/"
  },{
    "title": "Solution: Second roll",
    "excerpt":"The exercise can be solved by using the definition of the conditional probability, or we can also compute the probability of the \"6 on second role\" event directly over the sample space using the fundamental axioms and theorems of probability. ### Without conditional probabiilty The sample space consists of the...","url": "https://umutozge.github.io/solutions/ex-second-throw/"
  },{
    "title": "Solution: Strange Bob",
    "excerpt":"The sample space has the following 9 outcomes, with the corresponding products: | Outcome | Product | |---------|---------| | (1,1) | 1 | | (1,2) | 2 | | (1,3) | 3 | | (2,1) | 2 | | (2,2) | 4 | | (2,3) | 6 | | (3,1)...","url": "https://umutozge.github.io/solutions/ex-strange-bob/"
  },{
    "title": "Solution: Swap game",
    "excerpt":"First let us get clear about the process that we are aiming to build a probabilistic model for, leaning a little on what we bring from programming, especially how we took computation to be a succession of states. To help with mental consolidation of the process, think of two jars...","url": "https://umutozge.github.io/solutions/ex-swap-game/"
  },{
    "title": "Solution: Two envelopes",
    "excerpt":"A tough problem. Let's call the unknown amounts $$a_1$$ and $$a_2$$ with $$a_1  d_2$$, a max $$X$$, call this event $$A$$.     - $$d_1 1$$ (by problem definition), $$P(B) > 0$$; therefore $$P(W) > \\frac{1}{2}$$, with the suggested strategy.           Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-two-envelopes/"
  },{
    "title": "Solution: The unfair coin",
    "excerpt":"The example is due to [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann), taken from his 1951 paper [Various Techniques Used in Connection with Random Digits](https://mcnp-green.lanl.gov/pdf_files/InBook_Computing_1961_Neumann_JohnVonNeumannCollectedWorks_VariousTechniquesUsedinConnectionwithRandomDigits.pdf) The experiment consists of two tosses of the biased coin. If the result is `HT` you agree to count it as \"heads\"; if the result is `TH` you agree...","url": "https://umutozge.github.io/solutions/ex-unfair-coin/"
  },{
    "title": "Solution: Definitons over Venn",
    "excerpt":"{% capture img_url %}{% tikz_img venn-for-cond %}{% endcapture %} {% include figure-row.html src=img_url alt=\"Conditional Probability\" content=\" 1. \\\\( P(A\\given B) = \\frac{y}{y + z}\\\\) 1. \\\\( P(A\\given \\neg B) = \\frac{x}{x+t} \\\\) 1. \\\\( P(A\\cap \\neg B) = \\frac{x}{x+y+z+t}\\\\) 1. \\\\( P(B\\given A\\cap B) = 1 \\\\) 1. \\\\( P(A\\cup...","url": "https://umutozge.github.io/solutions/ex-venn-for-cond/"
  },{
    "title": "Solution: Deep count",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-deep-count/"
  },{
    "title": "Solution: Flatten",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-flatten/"
  },{
    "title": "Solution: Length",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-length/"
  },{
    "title": "Solution: Deep Max",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-max/"
  },{
    "title": "Solution: Maximum depth",
    "excerpt":"This is the shortest I could get.    ```python def maxdepth(seq):     \"\"\"Find the maximum nesting level in seq     In: list     Out: int     \"\"\"     if isinstance(seq, list):         return 0 if not seq else max(maxdepth(seq[0]) + 1, maxdepth(seq[1:]))     elif not isinstance(seq, list):         return -1 ```           Back to exercise      Download .ipynb   Download .py   ","url": "https://umutozge.github.io/solutions/ex-maxdepth/"
  },{
    "title": "Solution: Index",
    "excerpt":"```python def index(item, seq): return -1 if not seq else (0 if item == seq[0] else (1 + index(item, seq[1:]))) ``` might look like a good attempt, but it is not. You cannot return -1 for unsuccesful tries in this way. You must interfere in the \"upward\" flow of the...","url": "https://umutozge.github.io/solutions/ex-member-index/"
  },{
    "title": "Solution: Member",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-member/"
  },{
    "title": "Solution: Permutation",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-permutation/"
  },{
    "title": "Solution: Power set",
    "excerpt":"  ```python def pset(seq):     if not seq:         return [[]]     else:         rest = pset(seq[1:])         return [[seq[0]] + x for x in rest] + rest ```           Back to exercise      Download .ipynb   Download .py   ","url": "https://umutozge.github.io/solutions/ex-powerset/"
  },{
    "title": "Proof of Zero property of multiplication",
    "excerpt":"Proof not written yet.          Back to statement      ","url": "https://umutozge.github.io/proofs/th-mult-zero/"
  },{
    "title": "Solution: Insertion",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-insert/"
  },{
    "title": "Solution: Summation",
    "excerpt":"With `while`: ```python def mysum(seq): total = 0 while seq: total += seq[0] seq = seq[1:] return total ``` With `for`: ```python def mysum(seq): total = 0 for x in seq: total += x return total ``` With `proc`: ```python from funcutils import proc mysum = lambda seq: proc((0,seq), lambda...","url": "https://umutozge.github.io/solutions/ex-sum/"
  },{
    "title": "Proof of Total Probability",
    "excerpt":"Proof not written yet.          Back to statement      ","url": "https://umutozge.github.io/proofs/th-total-probability/"
  },{
    "title": "Tags",
    "excerpt":"","url": "https://umutozge.github.io/tags/"
  }]
