const factorial = (number) => {
  if(number <= 1){
    return 1;
  }

  return factorial(number - 1) * number;
}

const greatCommonDemoniator = (num1, num2) => {
  if(!b){
    return a;
  }
  return greatCommonDemoniator(b, a % b);
}
console.log(greatCommonDemoniator(5, 10))
