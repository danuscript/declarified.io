/**
 * eitherCallback(callback1, callback2): -> boolean
 * return innerFunc
 *
 * innerFunc(...args):
 *   invoke callback1, passing in ...args
 *   invoke callback2, passing in ...args
 *   if either invocation returns true:
 *     return true
 */

const eitherCallback = (callback1, callback2) => (
  (...args) => (callback1(...args) || callback2(...args))
);

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // -> [105, 9]
