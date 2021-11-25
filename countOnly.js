// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};
  for (let index of allItems) {
    if (itemsToCount[index]){
      if (countedItems[index]) {
        countedItems[index] += 1;
      } else {
        countedItems[index] = 1;
      }}
    } return countedItems;
  }

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true,"Karima": true,"Fang": true,"Agouhanna": false });
console.log(result1);