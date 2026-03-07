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
        "title": "Basic probability",
        "excerpt":"Define flip(p) that returns True with probability p and False with probability (1-p). Criteria The only built-in you can use is radoom.random: &gt;&gt;&gt; import random &gt;&gt;&gt; random.random() # returns a number in [0,1) 0.4013560344771465 which returns a uniformly distributed number in the interval [0,1). You cannot specify any parameters to...","categories": [],
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
        "title": "Phrase Structure Grammars",
        "excerpt":"In the following suit of exercises you are asked to use the Python module nltk to build and use phrase structure grammars. You need to first install the nltk module if you haven’t already. You can do this using pip: pip install nltk Or, if you are on conda, you...","categories": [],
        "tags": ["language","parsing","grammar"],
        "url": "/exercises/psg/",
        "teaser": null
      },{
        "title": "Sequence operations",
        "excerpt":"In the following exercises, you can treat sequences as lists or tuples, unless explicitly stated otherwise. Define a function mysum(seq) that returns the sum of all numbers in the list seq. def mysum(seq): \"\"\"Return the sum of all numbers in seq. In: seq - a sequnce of summable items Out:...","categories": [],
        "tags": ["python","sequence","lists","tuples"],
        "url": "/exercises/sequence-operations/",
        "teaser": null
      },{
        "title": "Sets",
        "excerpt":"Unless otherwise specified, you may use Python lists to represent sets. Given a set \\(A\\), the powerset of \\(A\\), denoted by \\(\\mathcal{P}(A)\\), is the set of all subsets of \\(A\\). Define a function powerset(s) that takes a set s and returns its powerset. Given a set \\(A\\), a partition of...","categories": [],
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
        "title": "Conditional proability",
        "excerpt":"The conditional probability of an event \\(A\\) given an event \\(B\\) is the probability of \\(A\\) occurring given that \\(B\\) has occurred. It is denoted as \\(P(A\\given B)\\) and can be calculated using the formula:   \\[P(A\\given B) = \\frac{P(A \\cap B)}{P(B)}\\] ","categories": [],
        "tags": [],
        "url": "/items/df-cond-prob/",
        "teaser": null
      },{
        "title": "Subcategorization",
        "excerpt":"You are given the following grammar: S -&gt; NP VP NP -&gt; Det N VP -&gt; V VP -&gt; V NP Det -&gt; 'every' | 'a' | 'the' | 'some' N -&gt; 'student' | 'professor' | 'dog' V -&gt; 'walks' | 'saw' | 'talks' Extend your grammar so that you...","categories": [],
        "tags": [],
        "url": "/items/ex-subcat/",
        "teaser": null
      },{
        "title": "Flip",
        "excerpt":"Define flip(p) that returns True with probability p and False with probability (1-p).  ","categories": [],
        "tags": [],
        "url": "/items/ex-flip/",
        "teaser": null
      },{
        "title": "Optimum order",
        "excerpt":"You enter a special kind of chess tournament, in which you play one game with each of three opponents, but you get to choose the order in which you play your opponents, knowing the probability of a win against each. You win the tournament if you win two games in...","categories": [],
        "tags": [],
        "url": "/items/ex-middle-best/",
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
        "title": "Number",
        "excerpt":"\\(1\\) is a number. If \\(n\\) is a number, then so is \\(s(n)\\). There is no number \\(n\\) such that \\(s(n) = 1\\). Given any two numbers \\(n\\) and \\(m\\), if \\(s(n) = s(m)\\) then \\(n = m\\). If a set \\(X\\) of numbers contains \\(1\\) and is closed1 under...","categories": [],
        "tags": [],
        "url": "/items/ax-peano-1/",
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
    "excerpt":"discrete 1 funprog 1 grammar 1 iteration 1 language 2 linear algebra 1 lists 1 number theory 1 parsing 1 probability 3 programming 1 proof 1 python 3 sequence 1 sets 1 tuples 1 Basic probability Probability and programming exercises. Combinatorics Various counting exercises. Higher-order functions A set of programming...","url": "https://umutozge.github.io/exercise/browser/"
  },{
    "title": "COGS 543",
    "excerpt":"Spring 2026 Umut Özge (✉️) , Anıl Öğdül (TA, ✉️) ⏰ W 2:40-5:30, II04 Check the current syllabus for course information and policies. Make sure you are on odtuclass to get announcements and updates. 📖: reading | 📝: exercise | 🧩: optional/advanced material Week Content 1&nbsp;(18/2) Course introduction; general discussion...","url": "https://umutozge.github.io/cl/schedule/"
  },{
    "title": "COGS 502",
    "excerpt":"Spring 2026 Umut Özge (✉️) , İlteriş Bozkurt (TA, ✉️) ⏰ T 2:40-5:30, II03 Check the current syllabus for course information and policies. Make sure you are on odtuclass to get announcements and updates. 📖: reading | 📝: exercise | 🧩: optional/advanced material Week Content 1&nbsp;(19/2) Basic notions in probability...","url": "https://umutozge.github.io/prelim/schedule/"
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
    "title": "Solution: Subcategorization",
    "excerpt":"Solution not written yet.          Back to exercise      ","url": "https://umutozge.github.io/solutions/ex-subcat/"
  },{
    "title": "Solution: Flip",
    "excerpt":"All you can expect from Python is to generate for you a random number in $$[1,0)$$. In an unbiased `flip` all the shots of `random` below 0.5 would be `True` and above would be `False`, or vice versa. Now you can adjust the bias of the `flip` with the parameter...","url": "https://umutozge.github.io/solutions/ex-flip/"
  },{
    "title": "Solution: Optimum order",
    "excerpt":"Let's name the three opponents as 1, 2, and 3, and let $$p_i$$ be the probability of winning against opponent $$i$$. Let's also take, without loss of generality, $$p_1 \\leq p_2 \\leq p_3$$, meaning that opponent 3 is the weakest. For a given order of opponents $$o_1, o_2 , o_3...","url": "https://umutozge.github.io/solutions/ex-middle-best/"
  },{
    "title": "Solution: Second roll",
    "excerpt":"The exercise can be solved by using the definition of the conditional probability, or we can also compute the probability of the \"6 on second role\" event directly over the sample space using the fundamental axioms and theorems of probability. ### Without conditional probabiilty The sample space consists of the...","url": "https://umutozge.github.io/solutions/ex-second-throw/"
  },{
    "title": "Solution: Strange Bob",
    "excerpt":"The sample space has the following 9 outcomes, with the corresponding products: | Outcome | Product | |---------|---------| | (1,1) | 1 | | (1,2) | 2 | | (1,3) | 3 | | (2,1) | 2 | | (2,2) | 4 | | (2,3) | 6 | | (3,1)...","url": "https://umutozge.github.io/solutions/ex-strange-bob/"
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
