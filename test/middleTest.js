const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');
const middle = require('../middle');


describe("#middle", () => {
  it ("returns [4] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it ("returns [] for [7]", () => {
    assert.deepEqual(middle([7]),[]);
  });
  it ("returns [4] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([11,12,13,14,15,16,17,18]),[14,15]);
  });
  it ("returns [4] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([10,20,30,40,50,60]),[30, 40]);
  });
});
