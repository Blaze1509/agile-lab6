from app import add
import pytest
def test_add(a,b):
    fnc = add(a, b)
    real = a + b
    assert (fnc == real)