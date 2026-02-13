import numpy as np
rng = np.random.default_rng(0)


def softmax(x, axis=None, stabilize=True):
    """Compute the softmax of each element along an axis of x.

    Parameters
    ----------
    x : array-like
    axis: int, for the axis to compute the softmax along. 
          None to compute over the entire input.
    stabilize: bool, if True, use numerical stabilization.

    Returns
    -------
    An array with the same shape as x. The result will sum to 1 along the
    specified axis.
    """

    x = np.exp(x - (
                    np.max(x, axis=axis, keepdims=True)
                    if stabilize else
                    np.zeros_like(x)
                    )
        )
    return x/np.sum(x, axis=axis, keepdims=True)
