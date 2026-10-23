// DATE AND TIME IN JAVASCRIPT

/* The Date object is used to work with dates and times in JavaScript.
   It represents a single moment in time since January 1, 1970, 00:00:00 UTC.
   It provides various methods to get and set date and time values, as well as to format them in different ways. */

const currentDate = new Date();
console.log(currentDate); // Output: [Current date and time] [Creates a new Date object with the current date and time]

console.log(currentDate.toString()); // Output: [Current date and time as a string]

console.log(currentDate.toISOString()); // Output: [Current date and time in ISO format]

console.log(currentDate.toDateString()); // Output: [Current date as a string]

console.log(currentDate.toTimeString()); // Output: [Current time as a string]

console.log(currentDate.toLocaleDateString()); // Output: [Current date in local format]

console.log(currentDate.toLocaleTimeString()); // Output: [Current time in local format]

console.log(currentDate.toLocaleString()); // Output: [Current date and time in local format]
