import sys
import numpy as np
from matplotlib import pyplot as plt
from functools import reduce
from immutables import Map
from funcutils import tap
from icecream import ic
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize

nltk.download("punkt")

def read_input(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        text = file.read()
    return text

def tokenize_text(text):
    """Tokenize the input text into words."""
    return word_tokenize(text)

def update_count(fdict, item):
    """Update the frequency dictionary with the given item."""
    return fdict.set(item, fdict.get(item,0) + 1)

def compute_frequencies(token_list):
    """Compute frequency distribution of tokens in the list."""
    return reduce(update_count, token_list, Map())

def frequency_to_rank(freq_dict):
    """Convert frequency dictionary to rank dictionary."""
    sorted_items = sorted(freq_dict.items(), key=lambda x: x[1], reverse=True)
    rank_dict = {item[0]: {'frequency': freq_dict[item[0]],
                           'rank': rank + 1}
                 for rank, item in enumerate(sorted_items)}
    return rank_dict

def filter_tokens(token_list):
    """Filter out non-alphabetic tokens and convert to lowercase."""
    return [token.lower() for token in token_list if token.isalpha()]

def extract_data(filename):
    """Extract data from the input file and return frequency-rank mapping."""
    return (
        # add rank information to frequencies
        frequency_to_rank(
            tap(
                # Compute frequencies of tokens
                compute_frequencies(
                    tap(
                        # Filter out non-alphabetic tokens and convert to lowercase
                        filter_tokens(
                            # Tokenize the text
                            tokenize_text(
                                # The corpus is read from the file
                                read_input(filename)
                            )
                        ),
                        # this lambda is for tap to look into the process
                        lambda x: ic(f'Tokenized {len(x)} items'
                                    )
                    )
                ),
                # this lambda is for tap to look into the process
                lambda x: ic(f'Computed frequencies for {len(x)} unique items'
                            )
            )
        )
    )

def plot_data(data):

    # Extract ranks and frequencies

    pairs = [(info['rank'], info['frequency']) for info in data.values()]
    ranks  = [r for r, f in pairs]
    freqs  = [f for r, f in pairs]

    # Plot results

    fig, (ax_lin, ax_log) = plt.subplots(1, 2, figsize=(10, 4), layout="constrained")

    # Left: linear
    ax_lin.plot(ranks, freqs, marker="o", markersize=1, linestyle="None")
    ax_lin.set_title("Linear plot")
    ax_lin.set_xlabel("Rank")
    ax_lin.set_ylabel("Frequency")

    # Right: log (choose what you mean by "log scale")
    ax_log.plot(ranks, freqs, marker="o", markersize=1, linestyle="None")
    ax_log.set_title("Log plot")
    ax_log.set_xlabel("Rank")
    ax_log.set_ylabel("Frequency")
    ax_log.set_yscale("log")
    ax_log.set_xscale("log")

    plt.show()

if __name__ == '__main__':
    data = extract_data(sys.argv[1] if len(sys.argv) > 1 else 'mtc-full.txt')
    plot_data(data)
