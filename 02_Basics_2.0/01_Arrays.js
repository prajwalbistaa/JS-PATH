//ARRAYS IN JS

/* An array is a data structure that stores a collection of elements (same or mixed).
   Each element in an array is identified by an index, which starts from 0.
   Arrays in JavaScript are dynamic, meaning their size can change during runtime. */



// Creating an array

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]


// Accessing elements in an array

console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Orange" 


// Modifying elements in an array

fruits[1] = "Mango";
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]



// Array methods

// 1. push(): Adds one or more elements to the end of an array.
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Grapes"]

// 2. pop(): Removes the last element from an array.
fruits.pop();
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]

// 3. shift(): Removes the first element from an array.
fruits.shift();
console.log(fruits); // Output: ["Mango", "Orange"]

// 4. unshift(): Adds one or more elements to the beginning of an array.
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Mango", "Orange"]       

// 5. length: Returns the number of elements in an array.
console.log(fruits.length); // Output: 3

// 6. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(fruits.indexOf("Mango")); // Output: 1
console.log(fruits.indexOf("Pineapple")); // Output: -1

// 7. includes(): Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(fruits.includes("Orange")); // Output: true
console.log(fruits.includes("Pineapple")); // Output: false

// 8. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (exclusive).
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Mango", "Orange"]

// 9. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 1, "Pineapple"); // Removes 1 element at index 1 and adds "Pineapple"
console.log(fruits); // Output: ["Strawberry", "Pineapple", "Orange"]

// 10. concat(): Merges two or more arrays and returns a new array.
const tropicalFruits = ["Papaya", "Kiwi"];
const allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // Output: ["Strawberry", "Pineapple", "Orange", "Papaya", "Kiwi"]

// 11. spread operator: The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
const moreFruits = ["Watermelon", "Peach"];
const combinedFruits = [...fruits, ...moreFruits];
console.log(combinedFruits); // Output: ["Strawberry", "Pineapple", "Orange", "Watermelon", "Peach"]

// 12. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// 13. isArray(): Determines whether the passed value is an array.
console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray("Not an array")); // Output: false

// 14. from(): Creates a new array instance from an array-like or iterable object.
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // Output: ["H", "e", "l", "l", "o"]

// 15. of(): Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
const numArray = Array.of(1, 2, 3, 4);
console.log(numArray); // Output: [1, 2, 3, 4]