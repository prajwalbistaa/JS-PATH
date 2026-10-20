// Variables in JS can be declared using var, let, or const. The main difference between them is their scope and mutability.


// var is function-scoped and can be redefined and updated.
var name = "John";
console.log(name); // Output: John

name = "Jane"; //Updating is allowed
console.log(name); // Output: Jane

var name = "Doe"; // Redefining is allowed
console.log(name); // Output: Doe



// let is block-scoped and can be updated but not redefined within the same scope.
let age = 30;
console.log(age); // Output: 30

age = 31; // Updating is allowed
console.log(age); // Output: 31

let age = 32; // This will throw an error: Identifier 'age' has already been declared
console.log(age); // This line will not be executed due to the error above



// const is block-scoped and cannot be updated or redefined. It must be initialized at the time of declaration.
const PI = 3.14;
console.log(PI); // Output: 3.14

PI = 3.14159; // This will throw an error: Assignment to constant variable.
console.log(PI); // This line will not be executed due to the error above  

const PI = 3.14159; // This will throw an error: Identifier 'PI' has already been declared
console.log(PI); // This line will not be executed due to the error above