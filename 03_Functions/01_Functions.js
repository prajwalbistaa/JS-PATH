// Functions in JS
// Functions are reusable blocks of code that perform a specific task or calculation.


// Function Declaration
function addTwoNumbers(num1, num2) { // Declaring a function named "addTwoNumbers" that takes two parameters: num1 and num2.
    return num1 + num2; // Returns the sum of num1 and num2.
}

console.log(addTwoNumbers(5, 10)); // Output: 15 [Calling the function with arguments 5 and 10]


// Multiple Parameters Using Rest Parameters
function calculateCartPrice(...num){ // Passing arguments using rest operator(...num); not spread operator 
    return num
}
console.log(calculateCartPrice(200, 400, 500, 2000))



// Function Using Object as Parameter
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);
}

const user = {
    username: "Node",
    id: 199
}
handleObject(user)

handleObject({
    username: "Python",
    id: 399
})



// Function Using Array as Parameter
function returnSecondValue(getArray){
    return getArray[1]
}

const myNewArray = [200, 400, 100, 600]
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));