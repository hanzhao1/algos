/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  const unique = {};

  const anagrams = (str, ana) => {
    if(str === ''){
      unique[ana] = true;
    }

    for(var i = 0; i < str.length; i++){
      const newStr = str.slice(0, i) + str.slice(i+1);
      anagrams(newStr, ana + str[i])
    }

  }

  anagrams(string, '')

  return Object.keys(unique);
};

console.log(allAnagrams('abc'))
