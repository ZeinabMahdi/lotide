const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence.charAt(index);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));