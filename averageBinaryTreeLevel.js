// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const arrayAverage = (array) => {
  return (array.reduce((a,b)=>{
    return a + b
  },0)/ array.length)
};

const breadthFirstSearch = (tree) => {
  const answer = [];
  const stack = [];
  stack.push(tree);
  while(stack.length > 0){
    const shiftVal = stack.shift();
    answer.push(shiftVal.val);
    if(stack.length === 0){
      answer.push(null);
    }
    if(shiftVal.left){
      stack.push(shiftVal.left)
    }

    if(shiftVal.right){
      stack.push(shiftVal.right)
    }
  }
  return answer;
};

const averageOfLevels = (tree) => {
  const allNodeVals = breadthFirstSearch(tree);
  const splitNodeValsToLevels = [];
  let currentLevel = [];
  for(let i = 0; i < allNodeVals.length; i++){
    if(allNodeVals[i] === null){
      splitNodeValsToLevels.push(currentLevel);
      currentLevel = [];
    } else {
      currentLevel.push(allNodeVals[i]);
    }
  }
  return splitNodeValsToLevels.map((ele)=>{
    return arrayAverage(ele);
  })
};


function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new Tree(3);

tree.left = new Tree(9)
tree.right = new Tree(20)
tree.right.left = new Tree(15)
tree.right.right = new Tree(7)

console.log(averageOfLevels(tree))

