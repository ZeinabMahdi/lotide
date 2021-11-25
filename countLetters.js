
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
 return counter

}

console.log(countLetters("hello I am zeinab"));
console.log(countLetters("lighthouse labs"));
