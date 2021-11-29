const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  console.log(newArray);
};


module.exports = tail;