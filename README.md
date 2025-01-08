# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: a stack overflow caused by unbounded recursion. The `foo` function recursively calls itself, but for large input values of `a`, it exceeds the JavaScript call stack limit. This results in a runtime error.

The solution demonstrates how to handle this problem with iterative solutions that avoid unbounded recursion and are more memory efficient.