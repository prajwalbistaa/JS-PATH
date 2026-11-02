// "forEach" Loop in JavaScript
// Used to iterate over the elements of an array.
// The loop variable will be the value of each element in the array.



// "forEach" loop example with an array (Arrow function):
const programming = ["JS", "RB", "PY", "JAVA", "C++"];
programming.forEach((element) => {
    console.log(element);
});


// "forEach" loop example with an array (Normal function):
const programming2 = ["JS", "RB", "PY", "JAVA", "C++"];
programming2.forEach(function(element) {
    console.log(element);
});


// "forEach" Loop example (item, index, array):
const programming3 = ["JS", "RB", "PY", "JAVA", "C++"];
programming3.forEach((item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
});


// "forEach" Loop example with an Object:
const myObject = {
    JS: 'Javascript',
    CPP: 'C++',
    RB: "Ruby",
    SWIFT: "Swift by apple"
};
Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key} shortcut is for ${value}`);
});


// Note: The forEach() method in JavaScript always returns undefined so filter(), map(), reduce() are used to return a new array or value.