
const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
// console.log(head([1, 2, 3]));
// console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 7);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");