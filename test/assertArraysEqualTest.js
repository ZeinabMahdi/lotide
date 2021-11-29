const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1,2,3], [1,2,3]); // => should PASS
assertArraysEqual([1,2,3], [1,5,3]); // => should FAIL