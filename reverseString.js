/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  // split the string into an array by each letter

  // loop through first half of the array
  const splitString = s.split('')
  // on each loop we want to swap the index and the array.length - i's
  for(let i = 0; i < Math.floor(splitString.length/2); i++){
    let oppositeLetterIdx = splitString.length - i - 1;
    let temp = splitString[i];
    splitString[i] = splitString[oppositeLetterIdx];
    splitString[oppositeLetterIdx] = temp;

  }
  return splitString.join('')
};
