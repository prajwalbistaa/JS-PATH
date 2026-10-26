// Example using var
sayHi(); // Throws TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};

// Example using const
sayBye(); // Throws ReferenceError: Cannot access 'sayBye' before initialization
const sayBye = () => {
    console.log("Bye!");
};
