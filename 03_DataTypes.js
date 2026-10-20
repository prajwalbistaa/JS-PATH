// Datatypes are the different types of values that can be stored and manipulated in a programming language. 
// In JavaScript, there are several basic data types, including:

//PRIMITIVE DATA TYPES

// 1. Number: Represents numeric values, both integers and floating-point numbers.
let num = 42;
console.log(num); // Output: 42

// 2. String: Represents a sequence of characters, such as "Hello, World!".
let str = "Hello, World!";
console.log(str); // Output: Hello, World!

// 3. Boolean: Represents a logical value, either true or false.
let isTrue = true;
console.log(isTrue); // Output: true

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVar;
console.log(undefinedVar); // Output: undefined

// 5. Null: Represents the intentional absence of any object value.
let nullVar = null;
console.log(nullVar); // Output: null

// 6. Symbol: Represents a unique identifier.
let sym = Symbol('description');
console.log(sym); // Output: Symbol(description)

// 7. BigInt: Represents integers with arbitrary precision.
let bigInt = 123456789012345678901234567890n;
console.log(bigInt); // Output: 123456789012345678901234567890n



//COMPLEX DATA TYPES or REFERENCE DATA TYPES or Non-Primitive Data Types

// 1. Object: Represents a collection of key-value pairs.
let obj = { name: "John", age: 30 };
console.log(obj); // Output: { name: 'John', age: 30 }

// 2. Array: Represents an ordered list of values.
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// 3. Function: Represents a reusable block of code that can be called with arguments.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!


//Other Data Types also include Date, RegExp, Map, Set, etc.