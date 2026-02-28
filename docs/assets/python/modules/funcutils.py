def proc_seq(n, seq, alive, update, init, debug=False):
    """Process a sequence of items.

    n: seed
    seq: function that produces the next item in the sequence
    alive: function that tests whether to continue processing
    update: function that updates the state
    init: initial state
    """
    store = init
    while alive(n):
        store = update(store, n)
        n = seq(n)
        if debug:
            print(store,n)
    return store

def proc(state, alive, update, debug=False, display=lambda x: print(x) or x):
    """Process as succession of states.

    state: initial state
    alive: one-place function that tests whether state is alive
    update: function that updates the state
    """
    if debug:
        print("Starting process with:", state )
    while alive(state):
        state = update(state) if not debug else display(update(state))
    return state

def lproc(state, alive, update):
    """A lazy version of proc that produces an iterator of states."""
    done = False
    _sentinel = object()

    def f():
        nonlocal state, done
        if done:
            return _sentinel
        elif alive(state):
            result = state
            state = update(state)
            return result
        else:
            done = True
            return state

    return iter(f, _sentinel)

def make_state(dict):
    """Create a namedtuple state object from a dictionary.

    In:
        dict: dictionary of state variables
    Out:
        namedtuple with fields from the dictionary keys

    Example:
        >>> state = make_state({'x': 1, 'y': 2})
        >>> state.x
        1
    """
    from collections import namedtuple
    return namedtuple('State', dict.keys())(**dict)

def make_generator(seq, init):
    """Create a generator from a sequence function.

    seq: function that produces the next item in the sequence
    init: initial state
    """

    def f():
        nonlocal init
        init = seq((result := init))
        return result
    return f

def tap(x, view=None, condition=lambda x:True):
    """Debugging utility to print value based on condition.

    x: value to potentially print
    view: function to print the value
    condition: function that determines whether to print
    """
    try:
        from icecream import ic
    except ImportError:
        def ic(x): print(x)

    view = view or ic

    if condition(x):
        view(x)
    return x
