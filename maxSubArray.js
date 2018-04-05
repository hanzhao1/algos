const maxSubarray = (array) => {
  let currentMax = -Infinity;
  let max = -Infinity;
  for(let i = 0; i< array.length ; i++){
    currentMax = Math.max(0, currentMax + array[i]);
    max = Math.max(max, currentMax);
  }
  return max;
}

console.log(maxSubarray([-1,2,3,-4,2,1]))
