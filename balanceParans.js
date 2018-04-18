/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  let stack = [];
  let parensObject = {
    '(' : true,
    '[' : true,
    '{' : true
  };

  for(let i = 0; i < input.length; i++){
    if(parensObject[input[i]]){
      stack.push(input[i])
    } else {
      if(input[i] === ')'){
        const poppedVal = stack.pop();
        if (poppedVal !== '('){
          return false;
        }
      }

      if(input[i] === ']'){
        const poppedVal = stack.pop();
        if (poppedVal !== '['){
          return false;
        }
      }

      if(input[i] === '}'){
        const poppedVal = stack.pop();
        if (poppedVal !== '{'){
          return false;
        }
      }
    }
  }

  return stack.length === 0;

  console.log(input)
};

console.log(balancedParens('[](){}'))
console.log(balancedParens('[({})]'))
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
