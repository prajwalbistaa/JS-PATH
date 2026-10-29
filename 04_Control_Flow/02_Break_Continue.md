# "break" in JS
- Immediately exits a loop or switch.
- No further iterations run; execution jumps to the first line after the loop.

## "break" example in code
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop completely when i = 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
# "continue" in JS
- Skip the current iteration but keep the loop running.
- Execution jumps to the next iteration (condition check/update step).

## "continue" example in code
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip iteration when i = 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
