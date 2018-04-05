const allOutcomes = (rounds, answer = [], currentRound = []) => {
  const possibility = ['rock', 'paper', 'scissor'];
  if(rounds === 0){
    return answer.push(currentRound)
  }

  possibility.forEach((ele)=>{
    allOutcomes(rounds - 1, answer, currentRound.concat(ele))
  })

  return answer;
}

console.log(allOutcomes(6))
