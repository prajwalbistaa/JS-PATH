// Immediately Invoked Function Expression (IIFE) 
// IIFE is a JavaScript function that runs as soon as it is defined. 



// 1. Standard Anonymous IIFE
(function () {
    console.log("This runs right away!");
})();


// 2. Arrow Function Variant
(() => {
    console.log("This also runs right away!");
})();


// 3. Passing Arguments
((name) => {
    console.log(`Hello, ${name}!`);
})("Alice");


// Note: Semicolon is needed at the end of the IIFE to avoid issues with automatic semicolon insertion in JavaScript.