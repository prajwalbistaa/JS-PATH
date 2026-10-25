//NUMBERS AND ITS METHODS IN JAVASCRIPT

const score = 400
console.log(score); // Output: 400

const balance = new Number(100)
console.log(balance); // Output: 100

console.log(balance.toString().length); // Output: 3 [toString() converts the number to a string, and .length gives the number of characters in string]

console.log(balance.toFixed(1)); // Output: 100.0 [toFixed() formats a number using fixed-point notation by taking an argument]

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // Output: 123.9 [toPrecision() formats a number to a specified length (somehow roundoff) by taking an argument]

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000 [toLocaleString() converts a number to a string, using locale-specific formatting. In this case, it formats the number according to the Indian numbering system.]



//MATHS AND ITS METHODS IN JAVASCRIPT

console.log(Math); // Output: [Math object] [Math is a built-in object that has properties and methods for mathematical constants and functions.]

console.log(Math.abs(-4)); // Output: 4 [Math.abs() converts a number to its absolute value (positive)]

console.log(Math.round(4.6)); // Output: 5 [Math.round() rounds a number to the nearest integer]

console.log(Math.ceil(4.2)); // Output: 5 [Math.ceil() rounds a number up to the nearest largest integer]

console.log(Math.floor(4.9)); // Output: 4 [Math.floor() rounds a number down to the nearest smallest integer]

console.log(Math.min(4, 3, 6, 8)); // Output: 3 [Math.min() returns the smallest number]
console.log(Math.max(4, 3, 6, 8)); // Output: 8 [Math.max() returns the largest number]

console.log(Math.random()); // Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
