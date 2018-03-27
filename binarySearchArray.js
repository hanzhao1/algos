/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target, start = 0, end = array.length) {
  const middle = Math.floor((start + end) / 2);

  if(start > end){
    return null;
  }

  if(array[middle] === target){
    return middle;
  } else {
    if(array[middle] > target) {
      return binarySearch(array, target, 0, middle - 1);
    } else {
      return binarySearch(array, target, middle + 1, end);
    }
  }
  return middle
};

var index = binarySearch([1, 2, 3, 4, 5,6,7,8,9], 2.5);

console.log(index);