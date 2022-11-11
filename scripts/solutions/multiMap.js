/**
 * multiMap(valuesArr, callbacksArr): -> object
 * initialize empty object outputObj
 * for each value of valuesArr
 *   initialize emtpy arr resultsArr
 *   for each callback of callbacksArr
 *     invoke callback, passing in value
 *     push result of callback invocation into resultsArr
 *   add value: resultsArr to outputObj as key: value pair
 * return outputObj
 */

const multiMap = (valuesArr, callbacksArr) => (
  valuesArr.reduce((accumulator, value) => {
    accumulator[value] = callbacksArr.map((callback) => callback(value));
    return accumulator;
  }, {})
);

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log:
// { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
//   glue: ['GLUE', 'Glue', 'glueglue'],
//   beer: ['BEER', 'Beer', 'beerbeer']
