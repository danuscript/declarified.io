/**
 * prioritize(inputArr, callback): -> array
 * initialize empty array trueResults
 * initialize empty array falseResults
 * for each element in inputArr
 *   invoke callback, passing in element
 *   if callback result is true
 *     push element into trueResults
 *   else push element into falseResults
 * concatenate trueResults and falseResults into one array
 * return concatenated array
 */

const prioritize = (inputArr, callback) => {
  const trueResults = [];
  const falseResults = [];

  inputArr.forEach((element) => {
    if (callback(element)) trueResults.push(element);
    else falseResults.push(element);
  });

  return trueResults.concat(falseResults);
};

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'];
console.log(prioritize(tvShows, startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
