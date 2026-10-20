// TYPEOF OPERATOR IN JAVASCRIPT

let score = "Javascript"
console.log(typeof score); // Output: string [Gives the type of the variable]



// TYPE CONVERSION IN JAVASCRIPT

let num = 42;
let numString = String(num); // Converts the number to a string.
console.log(typeof numString); // Output: string
console.log(numString); // Output: "42"

let valueInNumber = Number(score); // Converts the string to a number.
console.log(typeof valueInNumber); // Output: number
console.log(valueInNumber); // Output: NaN [If the string cannot be converted, it will return NaN (Not-a-Number).]



let isLoggedIn = "User";
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts the string to a boolean.
console.log(booleanIsLoggedIn); // Output: true [Non-empty strings are considered truthy values.]

// 1 => true, 0 => false
// "" => false



// CONCATENATION IN JAVASCRIPT`

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str3); // Output: Hello World

console.log(+ "Hello"); // Output: NaN [The unary plus operator tries to convert the string to a number, but since "Hello" is not a valid number, it returns NaN.]

console.log("1" + 2); // Output: "12"
console.log(1 + "2"); // Output: "12"

//AFTER THE QUOTATION MARKS, THE OPERAND IS A STRING, SO IT WILL BE CONCATENATED TO THE STRING.
console.log("1" + 2 + 2); // Output: "122"

//BEFORE THE QUOTATION MARKS, THE OPERAND IS A NUMBER, SO IT WILL BE ADDED TO THE NUMBER. 
console.log(1 + 2 + "2"); // Output: "32"

console.log(+true); // Output: 1 [True is converted to 1]
console.log(+false); // Output: 0 [false is converted to 0]

console.log(+""); // Output: 0 [Empty string is converted to 0]