// Hoisting in JS

/* A behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
   This means that you can use variables and functions before they are declared in the code. 
   However, only the declarations are hoisted, not the initializations. */



// let,var and const hoisting

// Example using let
console.log(myVar); // Throws ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;


// Example using const
console.log(myVar3); // Throws ReferenceError: Cannot access 'myVar3' before initialization
const myVar3 = 30;


// Example using var
console.log(myVar2); // Output: 20 [The variable is hoisted and initialized with undefined, so it can be accessed before its declaration.]
var myVar2 = 20;



// Function hoisting

// Example using function declaration
greet(); // Outputs: "Hello!"
function greet() {
    console.log("Hello!");
}


// Example using function expression
greet2(); // Throws TypeError: greet2 is not a function
var greet2 = function() {
    console.log("Hello from function expression!");
};
