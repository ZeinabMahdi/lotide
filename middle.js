const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let length = arr.length;
  const middleIndex = Math.floor(length / 2);
  let middleArr = [];
  if (length < 3) {
    return middleArr;
  } else if (length % 2 === 0) {
    middleArr.push(arr[middleIndex - 1], arr[middleIndex]);
  } else {
    middleArr.push(arr[middleIndex]);
  } return middleArr;
};

module.exports = middle;