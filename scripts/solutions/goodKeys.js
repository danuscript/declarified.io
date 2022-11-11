/**
 * goodKeys(inputObj, callback): -> array
 * initialize empty array outputArr
 * for each key in inputObj
 *   invoke callback, passing in key
 *   if result of callback invocation is true
 *     add key to outputArr
 * return outputArr
 */

const goodKeys = (inputObj, callback) => (
  Object.keys(inputObj).filter((key) => callback(inputObj[key]))
);

const sunny = {
  mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog',
};

function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; }
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
