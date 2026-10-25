//Object Declaration

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Output: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true
console.log(tinderUser.hasOwnProperty('isAdmin')); // Output: false



//Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ram",
            lastname: "Dhimal"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // Output: "Ram"



//Concatenating Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3); // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj9 = Object.assign({}, obj1, obj2, obj4)
console.log(obj9); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj5 = {...obj1, ...obj2}
console.log(obj5); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// Array of Objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users[1].email); // Output: b@gmail.com
