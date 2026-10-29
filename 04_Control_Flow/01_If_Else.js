// "if" statement

const score = 200
if (score > 100) { // if condition is true, then the code inside the block will be executed.
    let power = "Fly"
    console.log(`User power: ${power}`);
}


// "if else" statement

const temperature = 41
if ( temperature === 40 ){ // if temperature is equal to 40, then the code inside the block will be executed.
    console.log("Temperature is less than 50");
} else { // if temperature is not equal to 40, then the code inside the else block will be executed.
    console.log("Temperature is greater than 50");
}


// "if else if" statement

const balance = 800
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) { // Balance is 800, so this condition is true, and the code inside this block will be executed.
    console.log("less than 900");
} else if (balance < 1000) {
    console.log("less than 1000");
} else {
    console.log("greater than 1000");
}


// "logical operators" in if else statement

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard ) { // if both conditions are true, then the code inside the block will be executed.
    console.log("Allow to buy course");
} else { // if either of the conditions is false, then the code inside the else block will be executed.
    console.log("Not allowed to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) { // if either of the conditions is true, then the code inside the block will be executed.
    console.log("User logged in");
} else { // if both conditions are false, then the code inside the else block will be executed.
    console.log("User not logged in");
}