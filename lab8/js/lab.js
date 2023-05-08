// index.js - Lab 8: Anon Functions and Callbacks - practice anon functions and callbacks in JavaScript
// Author: Duncan Moran
// Date: May 7, 2023

//function for squaring numbers
function squareNumber(x) {
    return x * x;
}

//test function
console.log("what is 2 squared?", squareNumber(2));
console.log("what is 4 squared?", squareNumber(4));

var array = [2, 4, 6, 8]
console.log("My Array", array);

var result = array.map(squareNumber);
//should return [4, 16, 36, 64]
console.log("Array, squared:", result);

//designating a second result for when square rooting 
var result2 = array.map(function(x){
    return Math.sqrt(x);
})
//should return [1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903]
console.log("Squareroot of Array:", result2)