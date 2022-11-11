/**
 * countBy(inputArr, callback): -> object
 * initialize empty object outputObj
 * for each element in inputArr
 *   get result of invoking callback, passing in element
 *   if result is not a key in object
 *     add result property to object with value of 1
 *   else increment the value of result property in object
 * return outputObj
 */

const countBy = (inputArr, callback) => (
  inputArr.reduce((accumulator, element) => {
    const result = callback(element);
    if (!(result in accumulator)) accumulator[result] = 1;
    else accumulator[result] += 1;
    return accumulator;
  }, {})
);

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
}

const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
