/**
 * subtractTwo(number): -> number
 * return number - 2
 */

const subtractTwo = (number) => number - 2;

/**
 * map(array, callback): -> array
 * initialize empty array outputArr
 * for each element of inputArr
 *   invoke callback, passing in element as argument
 *   push result of callback invocation into outputArr
 * return outputArr
 */

const map = (inputArr, callback) => {
  const outputArr = [];

  for (const element of inputArr) {
    outputArr.push(callback(element));
  }

  return outputArr;
};

console.log(map([3, 4, 5], subtractTwo)); // -> [ 1, 2, 3 ]
