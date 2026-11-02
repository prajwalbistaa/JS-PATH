// "reduce" Method in JavaScript
// Used to accumulate the values of an array into a single value 


// "reduce" method example with an array:
const array = [1, 2, 3, 4];

// (0 + 1 + 2 + 3 + 4 = 10) is the process of reducing the array to a single value here.
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, // Here, accumulator is the initial value/accumulating value and currentValue is the current element of the array.
  initialValue,
);
console.log(sumWithInitial); // Expected output: 10


// "reduce" method example with an array of objects:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay); // Expected output: 22996
