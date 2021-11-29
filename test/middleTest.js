const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Cases
assertArraysEqual(middle([1,2,3,4,5]),[4]);
assertArraysEqual(middle([7]),[]);
assertArraysEqual(middle([11,12,13,14,15,16,17,18]),[14,15]);
assertArraysEqual(middle([10,20,30,40,50,60]),[30, 40]);