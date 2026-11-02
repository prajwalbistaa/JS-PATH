// Method Chaining in JavaScript
// It is a technique where multiple methods are called on the same object in a single line of code.



// Example of usual methods with an array:
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2); // Output: [2, 4, 6, 8, 10]
const filtered = doubled.filter(x => x > 5); // Output: [6, 8, 10]
const sum = filtered.reduce((acc, x) => acc + x, 0);

console.log(sum); // Expected output: 24


// Example of method chaining with an array:
const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2
  .map(x => x * 2) // Output: [2, 4, 6, 8, 10]
  .filter(x => x > 5) // Output: [6, 8, 10]
  .reduce((acc, x) => acc + x, 0);

console.log(result); // Expected output: 24