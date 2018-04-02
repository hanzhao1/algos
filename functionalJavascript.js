const add =(a,b) => a + b;

const curry = (func) => {
  const curried = (...args) => {
    if(args.length >= func.length){
      return func.apply(this, args)
    } else {
      return function(...args2){
        return curried(...args.concat(args2))
      }
    }
  }

  return curried;
}

const newAdd = curry(add);
console.log(newAdd(2)(3))
