// OBJECTS IN JS 
// An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type.


// Creating an object
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    "job title": "Engineer"
};
console.log(person); // Output: { name: "Alice", age: 30, city: "New York", "job title": "Engineer" }

// Accessing object properties
console.log(person.name); // Output: "Alice"
console.log(person["age"]); // Output: 30

console.log(person["job title"]); // Output: "Engineer"
console.log(person.job title); // Error because the property name has a space in it, so we need to use bracket notation


// Modifying object properties
person.age = 31;
console.log(person.age); // Output: 31


// Adding new properties to an object
person.country = "USA";
console.log(person); // Output: { name: "Alice", age: 31, city: "New York", country: "USA", "job title": "Engineer" }    


// Deleting properties from an object
delete person.city;
delete person["job title"];
console.log(person); // Output: { name: "Alice", age: 31, country: "USA" }
