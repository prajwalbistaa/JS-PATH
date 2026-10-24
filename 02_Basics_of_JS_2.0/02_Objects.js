// OBJECTS IN JS 
// An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type.


// Creating an object
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person); // Output: { name: "Alice", age: 30, city: "New York" }

// Accessing object properties
console.log(person.name); // Output: "Alice"
console.log(person["age"]); // Output: 30

// Modifying object properties
person.age = 31;
console.log(person.age); // Output: 31

// Adding new properties to an object
person.country = "USA";
console.log(person); // Output: { name: "Alice", age: 31, city: "New York", country: "USA" }    

// Deleting properties from an object
delete person.city;
console.log(person); // Output: { name: "Alice", age: 31, country: "USA" }

// Object methods