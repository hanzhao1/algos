const debounce = (func, wait) => {
  let currentFunc = null;
  return function () {
    clearTimeout(currentFunc);
    currentFunc = setTimeout(()=>{
      func.apply(this, arguments);
    }, wait)
  }
};
