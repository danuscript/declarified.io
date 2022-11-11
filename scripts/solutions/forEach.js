/**
 * forEach(inputArr, callbackFn): -> undefined
 * for each element of inputArr
 *   invoke callback, passing in element as argument
 */

const forEach = (inputArr, callback) => {
  for (const element of inputArr) {
    callback(element);
  }
};

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

  forEach(inputArr, (element) => {
    outputArr.push(callback(element));
  });

  return outputArr;
};

forEach(['a', 'b', 'c'], (i) => console.log(i)); // -> 'a', 'b', 'c'
console.log(map([3, 4, 5], (n) => n - 2)); // -> [1, 2, 3]
