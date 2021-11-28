// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};


// TEST CODE
// console.log(head([1, 2, 3]));
// console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 6);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");