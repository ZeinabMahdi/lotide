const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
        return false;
      } 
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  // console.log(eqArrays(arr1, arr2));
  if (eqArrays(arr1, arr2) === true) {
    console.log(`💚 Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'g', 'w', 't', 9, 't' ]);