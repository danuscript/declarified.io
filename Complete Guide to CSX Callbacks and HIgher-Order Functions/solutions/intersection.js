/**
 * intersection(inputArrs): -> array
 * initialize accumulator with value of first subarray of inputArrs
 * for each subArr of remaining inputArrs
 *   initialize an empty array commonEls
 *   for each element of subArr
 *     if accumulator includes element
 *       push element into commonEls
 *   assign accumulator new value of commonEls
 * return accumulator
 */

const intersection = (inputArrs) => (
  inputArrs.reduce((accumulator, subArr) => (
    subArr.filter((element) => accumulator.includes(element))
  ))
);

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // -> [5, 15]
