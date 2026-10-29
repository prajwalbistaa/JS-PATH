// "if" statement

const score = 200
if (score > 100) {
    let power = "Fly"
    console.log(`User power: ${power}`);
}


// "if else" statement

const temperature = 41
if ( temperature === 40 ){
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than 50");
}


// "if else if" statement

const balance = 800
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else if (balance < 1000) {
    console.log("less than 1000");
} else {
    console.log("greater than 1000");
}


// "logical operators" in if else statement

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
} else {
    console.log("Not allowed to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} else {
    console.log("User not logged in");
}