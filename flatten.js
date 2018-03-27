const flatten = (array) => {
  return array.reduce((acc, element)=>{
    if(Array.isArray(element)){
      return acc.concat(flatten(element));
    }
    return acc.concat(element);
  }, [])
}

console.log(flatten([1,2,3,4]))
console.log(flatten([1,[[[[[2]]]]],3,4]))
console.log(flatten([1,2,[[[3], 3.5]],4]))
console.log(flatten([1,2,3,[[[[[4]]]]]]))
