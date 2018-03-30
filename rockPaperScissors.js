/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

const outComes = ['rock', 'paper', 'scissors'];

const rockPaperScissors = function () {
  // TODO: your solution here
  const answer = [];

  for(var i = 0; i < outComes.length; i++){
    for(var j = 0; j < outComes.length; j++){
      for(var n = 0; n < outComes.length; n++){
        answer.push([outComes[i], outComes[j], outComes[n]])
      }
    }
  }

  return answer;
};

const RPS2 = (rounds, answer = [], currentRound = []) => {
  if(rounds === 0){
    return answer.push(currentRound);
  }

  outComes.forEach((ele)=>{
    RPS2(rounds - 1, answer, currentRound.concat(ele));
  })

  return answer
}

console.log(RPS2(4))












const RPS = (rounds, answer = [], current = []) => {
  if(rounds === undefined){
    return 'Please input an round'
  }
  if(rounds === 0){
    return answer.push(current);
  }

  outComes.forEach((ele)=>{RPS(rounds - 1, answer, current.concat(ele))})

  return answer
}

// console.log(RPS(3));