const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length[i] !== arr2.length[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚 Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      newArray.push(i);
    }
  } return newArray;
};

module.exports = without;