const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
}
return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚 Assertion passed: ${arr1} === ${arr2}`);
} else {
  console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
}
};

const middle = function(arr) {
  let length = arr.length;
  const middleIndex = Math.floor(length/2);
  let middleArr = [];
  if (length < 3) {
    return middleArr;
  } else if (length % 2 === 0){
    middleArr.push(arr[middleIndex-1], arr[middleIndex]);
  } else {
    middleArr.push(arr[middleIndex]);
  } return middleArr;
};

console.log(middle([1,2,3,4,5]));
console.log(middle([7]));
console.log(middle([11,12,13,14,15,16,17,18]));
console.log(middle([10,20,30,40,50,60]));