// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  //let valueHolder = value;
  for (let index of keys) {
    if (obj[index] === value) {
      return index;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "scifi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);