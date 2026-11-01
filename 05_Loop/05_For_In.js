// "for...in" Loop in JavaScript
// Used to iterate over the enumerable properties of an object.
// The loop variable will be the key of each property.



// "for...in" loop example with an object:
const myObject = {
    JS: 'Javascript',
    CPP: 'C++',
    RB: "Ruby",
    SWIFT: "Swift by apple"
}   
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// "for...in" loop example with an array:
const programming = ["JS", "RB", "PY", "JAVA", "C++"]
for (const key in programming) {
    console.log(programming[key]);
}
