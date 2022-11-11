/**
 * reduce(inputArr, callback, initialValue): -> variable
 * initialize accumulator with initialValue
 * for each element of array
 *   invoke callback, passing in accumulator and element
 *   assign accumulator a new value of the callback result
 * return accumulator
 */

const reduce = (inputArr, callback, initialValue) => {
  let accumulator = initialValue;

  inputArr.forEach((element) => {
    accumulator = callback(accumulator, element);
  });

  return accumulator;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0)); // -> 8
