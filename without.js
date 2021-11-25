const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      newArray.push(i);
    }
  } return newArray;
};

console.log(without([1,2,3], [1,2]));