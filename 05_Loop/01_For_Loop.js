// "for" loop in JavaScript
// Used to execute a block of code a specific number of times.



// "for" loop example:
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


// "for" nested loop example:
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
   }  
}


// "for" loop with array example:
let myArray = ["Flash", "Batman", "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// "break" in for loop example:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
}


// "continue" in for loop example:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
}