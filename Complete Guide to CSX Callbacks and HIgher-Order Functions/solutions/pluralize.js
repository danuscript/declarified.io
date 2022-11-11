/**
 * pluralize(inputArr): -> array
 * initialize empty array outputArr
 * for each string of inputArr
 *   concatenate string with 's'
 *   push concatenated string into outputArr
 * return outputArr
 */

const pluralize = (inputArr) => {
  const outputArr = [];

  for (let i = 0; i < inputArr.length; i += 1) {
    outputArr.push(`${inputArr[i]}s`);
  }

  return outputArr;
};

const animals = ['dog', 'cat', 'tree frog'];
console.log(pluralize(animals)); // -> ['dogs', 'cats', 'tree frogs']
