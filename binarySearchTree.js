class BinarSearchTree {
  constructor(value){
    this.data = value;
    this.right = null;
    this.left = null;
  }

  insert(value){
    if(value > this.data){
      // Go to the right side of the tree
      if(this.right === null){
        this.right = new BinarSearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if(this.left === null){
        this.left = new BinarSearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }

  contains(value){
    if(this.data === value){
      return true;
    }
    if(this.data < value){
      if(this.right === null){
        return false;
      } else {
        return this.right.contains(value)
      }
    } else {
      if(this.left === null){
        return false;
      } else {
        return this.left.contains(value)
      }
    }
  }

  depthFirstInOrder(cb){
    if(this.left){
      this.left.depthFirstInOrder(cb)
    }

    cb(this.data);

    if(this.right){
      this.right.depthFirstInOrder(cb)
    }
  }

  depthFirstPreOrder(cb){
    cb(this.data)

    if(this.left){
      this.left.depthFirstPreOrder(cb);
    }

    if(this.right){
      this.right.depthFirstPreOrder(cb);
    }
  }

  depthFirstPostOrder(cb){
    if(this.left){
      this.left.depthFirstPostOrder(cb);
    }

    if(this.right){
      this.right.depthFirstPostOrder(cb);
    }

    cb(this.data)
  }

  breathFirstSearch(cb){
    const queue = [];
    queue.push(this);
    while(queue.length){
      let shiftItem = queue.shift();
      cb(shiftItem.data);
      if(shiftItem.left){
        queue.push(shiftItem.left)
      }
      if(shiftItem.right){
        queue.push(shiftItem.right)
      }
    }
  }

  depthFirstBackwardsInOrder(cb){
    if(this.right){
      this.right.depthFirstBackwardsInOrder(cb)
    }

    cb(this.data)

    if(this.left){
      this.left.depthFirstBackwardsInOrder(cb)
    }
  }
  nthBiggest(nth, cb){
    const answer = [];
    this.depthFirstBackwardsInOrder((ele)=>{
      answer.push(ele);
      if(answer.length === nth){
        cb(ele)
        return;
      }
    })
    if(answer.length < nth){
      return null;
    }
  }

  findPath(val, path = []){
    if(this.data === val){
      return path.concat(this.data);
    }
    if(this.data > val){
      return this.left.findPath(val, path.concat(this.data))
    } else {
      return this.right.findPath(val, path.concat(this.data))
    }
  }

  commonAncestorEasy(nodeVal, nodeVal2){
    const path1 = this.findPath(nodeVal);
    const path2 = this.findPath(nodeVal2);
    const min = Math.min(path1.length, path2.length);

    for(var i = 0; i < min; i++){
      if(path2[i] !== path1[i]){
        return path1[i-1]
      }
    }

    return path1[i - 1];
  }

  commonAncestor(val1, val2){
    if(this.data === val2 || this.data === val1){
      return this.data;
    }

    if(this.left){
      var leftLCA = this.left.commonAncestor(val1, val2);
    }
    if(this.right){
      var rightLCA = this.right.commonAncestor(val1, val2);
    }

    if(leftLCA && rightLCA){
      return this.data;
    }

    return !!leftLCA ? leftLCA : rightLCA;
  }
}
