//IMPORTANT METHODS OF STRINGS

//1. charAt() - Returns the character at a specified index (position) in a string.
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: H

//2. charCodeAt() - Returns the Unicode of the character at a specified index in a string.
console.log(str.charCodeAt(0)); // Output: 72 (Unicode of 'H')

//3. concat() - Combines two or more strings and returns a new string.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!

//4. includes() - Checks if a string contains a specified value and returns true or false.
console.log(str.includes("World")); // Output: true

//5. indexOf() - Returns the index of the first occurrence of a specified value in a string. Returns -1 if not found.
console.log(str.indexOf("World")); // Output: 7

//6. lastIndexOf() - Returns the index of the last occurrence of a specified value in a string. Returns -1 if not found.
console.log(str.lastIndexOf("o")); // Output: 8

//7. slice() - Extracts a section of a string and returns it as a new string.
console.log(str.slice(7, 12)); // Output: World

//8. split() - Splits a string into an array of substrings based on a specified separator.
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]

//9. substring() - Returns a part of the string between two specified indices.
console.log(str.substring(7, 12)); // Output: World 

//10. toLowerCase() - Converts a string to lowercase letters.
console.log(str.toLowerCase()); // Output: hello, world!    

//11. toUpperCase() - Converts a string to uppercase letters.
console.log(str.toUpperCase()); // Output: HELLO, WORLD!    

//12. trim() - Removes whitespace from both ends of a string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // Output: Hello, World!

//13. replace() - Replaces a specified value with another value in a string.
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

//14. startsWith() - Checks if a string starts with a specified value and returns true or false.
console.log(str.startsWith("Hello")); // Output: true

//15. endsWith() - Checks if a string ends with a specified value and returns true or false.
console.log(str.endsWith("!")); // Output: true
