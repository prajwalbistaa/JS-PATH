# Operators in JavaScript
JavaScript operators are special symbols used to perform operations on values and variables, such as arithmetic, comparisons, assignments, and logic.

## Types of Operator

1. Assignment Operators
Used to assign values to variables.

= → Assigns a value (x = 5)
+= → Adds and assigns (x += 2 → x = x + 2)
-= → Subtracts and assigns (x -= 2)
*= → Multiplies and assigns (x *= 2)
/= → Divides and assigns (x /= 2)
%= → Remainder and assigns (x %= 2)
**= → Exponentiation and assigns (x **= 2)


2. Arithmetic Operators
Perform mathematical calculations.

\+ → Addition (3 + 2 = 5)
\- → Subtraction (5 - 2 = 3)
\* → Multiplication (3 * 2 = 6)
/ → Division (6 / 2 = 3)
% → Modulus (remainder) (5 % 2 = 1)
** → Exponentiation (2 ** 3 = 8)
++ → Increment (x++ or ++x)
-- → Decrement (x-- or --x)


3. Comparison Operators
Return true or false based on conditions.

== → Equal to (loose, type conversion allowed)
=== → Strict equal (no type conversion)
!= → Not equal
!== → Strict not equal
\> → Greater than
< → Less than
\>= → Greater than or equal
<= → Less than or equal


4. Logical Operators
Used for combining conditions.

&& → AND (true && false → false)
|| → OR (true || false → true)
! → NOT (!true → false)
?? → Nullish coalescing (returns right-hand operand if left is null or undefined)


5. Bitwise Operators
Work on binary representations of numbers.

& → AND
| → OR
^ → XOR
~ → NOT
<< → Left shift
\>> → Right shift
\>>> → Unsigned right shift


6. Other Useful Operators

- Ternary (?:) → Conditional operator (condition ? value1 : value2)
- delete → Removes a property from an object
- in → Checks if a property exists in an object ("x" in obj)
- instanceof → Checks if an object is an instance of a class


### Increment & Decrement Operators

```let gameCounter = 100```
```++gameCounter; // Pre-increment operator increases the value by 1 before returning it.```
```console.log(gameCounter); // Output: 101```

```let gameCounter1 = 100```
```--gameCounter1; // Pre-decrement operator decreases the value by 1 before returning it.```
```console.log(gameCounter1); // Output: 99```


```let gameCounter2 = 100```
```gameCounter2++; // Post-increment operator increases the value by 1 after returning it. ``` 
```console.log(gameCounter2); // Output: 101 ```

```let gameCounter3 = 100```
```gameCounter3--; // Post-decrement operator decreases the value by 1 after returning it.```
```console.log(gameCounter3); // Output: 99```


```// For Proper Understanding of Pre-Increment and Post-Increment Operators```

```let a = 5;```
```let b = 5;```
```console.log(++a + ++b); // Output: 12 [Both a and b are incremented before the addition]```

```let c = 5;   ```
```let d = 5;```
```console.log(c++ + d++); // Output: 10 [Both c and d are incremented after the addition]```

```let e = 5;```
```let f = 5;```
```console.log(++e + f++); // Output: 11 [e is incremented before the addition, f is incremented after the addition]```

```// Note: Same logic applies to Pre-Decrement and Post-Decrement Operators.```