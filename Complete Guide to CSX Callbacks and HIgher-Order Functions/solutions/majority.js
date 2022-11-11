/**
 * majority(inputArr, callback): -> boolean
 * initialize trueResults to 0
 * for each element of inputArr:
 *   invoke callback, passing in element
 *   if result of callback invocation is true
 *     increment trueResults by 1
 * return boolean indicating whether trueResults is greater
 * than half the length of inputArr
 */

const majority = (inputArr, callback) => {
  const trueResults = inputArr.reduce((accumulator, element) => (
    (callback(element)) ? accumulator + 1 : accumulator
  ), 0);

  return (trueResults > inputArr.length / 2);
};

const isOdd = (num) => num % 2 === 1;
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
