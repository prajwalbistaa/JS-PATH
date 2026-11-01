// "for of" loop in JavaScript
// Used to iterate over iterable objects like arrays, strings, maps, sets, etc. 
// It provides a simpler syntax compared to the traditional "for" loop.



// "for of" loop example with an array:
let myArray = ["Flash", "Batman", "Superman"];  
for (const hero of myArray) {
    console.log(hero);
}


// "for of" loop example with a string:
let myString = "Hello";
for (const char of myString) {
    console.log(char);
}

// "for of" loop example with a Map:
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// "for of" loop example with Object:
const myObject = {  
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}