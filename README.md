# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ZeinabMahdi/lotide`

**Require it:**

`const _ = require('@ZeinabMahdi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([array])`: returns the first element in an array. 
* `tail([array])`: returns every element except the head (first element) of the array.
* `without([array])`: returns a subset of a given array, removing unwanted elements.
* `assertEqual(num/str, num/str)`: compares primitive types (like numbers and strings).
* `assertArraysEqual([array],[array])`: compares two arrays to ensure the values within them are equal.
* `eqArrays([array],[array])`: returns true if two arrays are equal.
* `middle([array])`: takes in an array and return the middle-most element(s) of the given array.
* `countLetters('string')`: takes in a sentence (in string form) and returns a tally of each of the letters in that sentence.
* `letterPositions('string')`: returns all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue({object}, value)`: searches for a key on an object where its value matches a given value.
* `eqObjects({object}, {object})`: returns true if two objects are equal.
* `takeUntil(array, callback)`: returns a slice of a given array with elements from the beginning until the callback provided returns a truthy value.
* `findKey({object}, value)`: scans the object and return the first key for which the callback returns a truthy value.
* `assertObjectsEqual({object}, {object})`: compares two objects to ensure the values within them are equal.
* `countOnly([array], num)`: recieves an array of items and return counts for a specific subset of them.
* `map([array], callback)`: produces a new array containing elements of the original array that met the callback function criteria.