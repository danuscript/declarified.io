/**
 * objOfMatches(inputArr1, inputArr2, callback): -> object
 * initialize empty object outputObj
 * for each element1 of inputArr1
 *   element2 is inputArr2 at same index as element1
 *   invoke calback, passing in elemnent 1
 *   if the result of the callback invocation is equal to element2:
 *     add element1 and element2 to outputObj as key: value pair
 * return outputObj
 */

const objOfMatches = (inputArr1, inputArr2, callback) => {
  const outputObj = {};

  inputArr1.forEach((element1, index) => {
    const element2 = inputArr2[index];

    if (callback(element1) === element2) {
      outputObj[element1] = element2;
    }
  });

  return outputObj;
};

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser));
// should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
