/**
 * groupBy(inputArr, callback): -> object
 * initialize empty object outputObj
 * for each element of inputArr
 *   get result of invoking callback, passing in element
 *   if result is not a key in object
 *     add result property to object with value of array containing element
 *   else push element into value of result property
 * return outputObj
 */

const groupBy = (inputArr, callback) => (
  inputArr.reduce((accumulator, element) => {
    const result = callback(element);
    if (!(result in accumulator)) accumulator[result] = [element];
    else accumulator[result].push(element);
    return accumulator;
  }, {})
);

const decimals = [1.3, 2.1, 2.4];
const floored = (num) => Math.floor(num);
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
