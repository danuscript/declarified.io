/**
 * union(inputArrs): -> array
 * initialize accumulator with value of empty array
 * for each subArr of inputArrs
 *   if accumulator does not include element
 *     push element into accumulator
 * return accumulator
 */

const union = (inputArrs) => (
  inputArrs.reduce((accumulator, subArr) => {
    subArr.forEach((element) => {
      if (!(accumulator.includes(element))) {
        accumulator.push(element);
      }
    });

    return accumulator;
  }, [])
);

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
