// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length){
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne.length[i] !== arrTwo.length[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`💚 Assertion passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑 Assertion failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
