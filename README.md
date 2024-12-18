# Type Coercion Bug in TypeScript

This repository demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime behavior despite the code compiling without errors. The example focuses on implicit type conversion in arithmetic operations.

## The Bug

A function `add` is defined to take two numbers as input and return their sum. However, due to TypeScript's type coercion rules, passing a string and a number results in string concatenation rather than numeric addition. This leads to a runtime error that is difficult to track down.

## Solution

The solution involves stricter type checking and avoiding implicit type coercion.  The corrected function explicitly checks the types of the inputs before performing the addition operation.  This prevents unexpected behavior at runtime.

## How to Run

1. Clone this repository.
2. Run `tsc bug.ts` to compile the buggy code.
3. Run `node bug.js` to observe the incorrect output.
4. Run `tsc bugSolution.ts` to compile the corrected code.
5. Run `node bugSolution.js` to observe the correct output.