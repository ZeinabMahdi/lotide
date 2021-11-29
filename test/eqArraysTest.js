// const assertEqual = require('../assertEqual');
// const head = require('../eqArrays');


// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));// => FAIL

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));