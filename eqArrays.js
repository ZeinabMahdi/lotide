// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) { 
//       if (arr1[i] === arr2[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     }
//   }
// };

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);// => FAIL

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// module.exports = eqArrays;