/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (seq, count = 0, current = [], answer = []) => {
  if(0 === seq.length){
    answer.push(current);
    return;
  }
  for(let i = 0; i < seq.length; i++){
    let newSeq = seq.slice(0, i).concat(seq.slice(i+1, seq.length))
    getPermutation(newSeq, count + 1, current.concat(seq[i]), answer)
  }
  return answer;
};


console.log(getPermutation([1,2,3]))
