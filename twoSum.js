const twoSumSorted = (array, total) => {
  let smallestIdx = 0;
  let biggestIdx = array.length - 1;

  while(smallestIdx < biggestIdx){
    if ((array[smallestIdx] + array[biggestIdx]) === total){
      return [smallestIdx, biggestIdx];
    }
    if((array[smallestIdx] + array[biggestIdx]) > total){
      biggestIdx--;
    } else {
      smallestIdx++;
    }
  }
  return false;
}

const twoSum = (array, total) => {
  const trackingObject = {};
  for(var i = 0; i < array.length; i++){
    if(trackingObject[total - array[i]] !== undefined){
      if(trackingObject[total - array[i]] !== i){
        return true;
      }
    } else {
      trackingObject[array[i]] = i;
    } 
  }
  return false;
}

console.log(twoSum([1,3,7,19], 17));