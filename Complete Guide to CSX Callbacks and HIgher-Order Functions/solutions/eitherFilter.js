/**
 * eitherFilter(inputArr, callback1, callback2): -> array
 * initialize empty array outputArr
 * for each element of inputArr
 *   invoke callback1, passing in element
 *   invoke callback2, passing in element
 *   if either invocation returns true
 *     push element into outputArr
 * return output array
 */

const eitherFilter = (inputArr, callback1, callback2) => {
  const outputArr = [];

  inputArr.forEach((element) => {
    if (callback1(element) || callback2(element)) {
      outputArr.push(element);
    }
  });

  return outputArr;
};

const arrOfNums2 = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
console.log(eitherFilter(arrOfNums2, integerSquareRoot, over100)); // -> [105, 9]
