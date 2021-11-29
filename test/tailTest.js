const assertEqual = require('chai').assertEqual;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ 'Lighthouse', 'Labs' ]);
  });
});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!