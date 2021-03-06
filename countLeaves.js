/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
          3
        /   \
      9      20
            /   \
          15      7
**/

const countLeaves = (tree, count) => {
  if(tree.right === null && tree.left === null){
    return 1;
  }
  return countLeaves(tree.left)+ countLeaves(tree.right)
}

function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new Tree(3);

tree.left = new Tree(9)
tree.right = new Tree(20)
tree.right.left = new Tree(15)
tree.right.right = new Tree(7)

console.log(countLeaves(tree))
