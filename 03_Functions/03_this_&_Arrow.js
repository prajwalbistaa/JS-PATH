// "this" Keyword in JS
// The "this" keyword refers to the object that is executing the current function.



// "this" in Object Method
const user = {
    username: "hritik",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // Output: "hritik , welcome to website"
        console.log(this); // Output: { username: 'hritik', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
}

console.log(user.welcomeMessage()) // Output: "hritik , welcome to website"
user.username = "sam"
console.log(user.welcomeMessage()) // Output: "sam , welcome to website"
console.log(this); // Output: {} [In the global context, "this" refers to the global object (window in browsers, global in Node.js). In strict mode, "this" is undefined.]


// "this" in Function
function chai(){
    let username = "hritik"
    console.log(this.username); // Output: undefined [In a regular function, "this" refers to the global object (window in browsers, global in Node.js). In strict mode, "this" is undefined.]
}
chai()


// "this" in Arrow Function
const chair = () => {
    let username = "hritik"
    console.log(this.username); // Output: undefined [In an arrow function, "this" is lexically bound, meaning it takes the value of "this" from the surrounding context. In this case, it refers to the global object (window in browsers, global in Node.js). In strict mode, "this" is undefined.]
}
chair()



// Arrow Function in JS

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)) // Output: 7


// Arrow Function with Implicit Return

const addTwoImplicit = (num1, num2) =>  num1 + num2 // Without curly braces and return keyword
console.log(addTwoImplicit(3, 4)) // Output: 7

const getUserName = () => ({username: "hritik"}) // Returning an object from an arrow function requires wrapping in parentheses.
console.log(getUserName()); // Output: { username: 'hritik' }