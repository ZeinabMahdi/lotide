const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let unspaced = sentence.split(" ").join("");
  const counter = {};
  for (let index of unspaced) {
    if (counter[index]) {
      counter[index]++;
    } else {
      counter[index] = 1;
    }
  }
  return counter;
};

console.log(assertEqual(countLetters("hello I am zeinab"),14));
console.log(assertEqual(countLetters("lighthouse labs"),14));
