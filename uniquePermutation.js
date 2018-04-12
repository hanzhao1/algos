/**
Given a collection of numbers that might contain duplicates,
return all possible unique permutations.
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (seq, current = [], answer = {}) => {
  if(seq.length === 0){
    let stringifyAnswer = JSON.stringify(current);
    answer[stringifyAnswer] = 1;
    return;
  }

  for(let i = 0; i < seq.length; i++){
    let newSeq = seq.slice(0,i).concat(seq.slice(i+1, seq.length));
    permuteUnique(newSeq, current.concat(seq[i]), answer)
  }

  return Object.keys(answer).map(a=>JSON.parse(a))
};

console.log(permuteUnique([1,1,2]))
