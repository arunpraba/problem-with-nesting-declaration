# Problem with nesting declaration

## Problem Statement

When working with nested component declarations in React, it's essential to be aware of potential issues that can affect your application's performance.

## Input Row Nested Component Declaration

Input fields lose focus after a keypress because the nested function is recreated during component re-renders.

## Input Row Nested Component Declaration with useCallback

The `InputRowNestedDeclaration` component is wrapped with the `useCallback` hook to obtain a memoized version of the function. This prevents the creation of a new function on every re-render, ensuring that input fields maintain focus.

Here's how you can implement this solution:

## Input Row with Top-Level Declaration

The `InputRowTopLevelDeclaration` is created a toplevel of a componentm maintains its own state and won't be recreated during re-renders, ensuring smooth functionality.
