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

console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}));
