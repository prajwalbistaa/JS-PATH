// "do...while" loop in JavaScript
// Used to execute a block of code at least once, and then repeatedly as long as a specified condition is true.



// "do...while" loop example:
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


// "do...while" loop with array example:
let myArray = ["Flash", "Batman", "Superman"]
let arr = 0
do {
    console.log(`Superhero is ${myArray[arr]}`);
    arr++
} while (arr < myArray.length);