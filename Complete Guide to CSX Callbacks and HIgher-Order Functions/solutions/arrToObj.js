/**
 * arrToObj(inputArr, callback): -> object
 * initalize empty object outputObj
 * for each value of inputArr
 *   get result of invoking callback, passing in value
 *   add value: result to outputObj as key: value pair
 * return outputObj
 */

const arrToObj = (inputArr, callback) => (
  inputArr.reduce((accumulator, value) => {
    accumulator[value] = callback(value);
    return accumulator;
  }, {})
);

const arrOfStrings = ['beer', 'glue'];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
