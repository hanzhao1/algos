class Node {
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    if(this.head === null){
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  searchNodeAt(position){
    let count = 1;
    let currentNode = this.head;
    if(position === 1){
      return this.head.data;
    }
    while(currentNode.next){
      if(position === count){
        return currentNode.data;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  remove()

}


const list = new LinkedList();
list.add(1)
list.add(2)
list.add(4)
list.add(9)

console.log(list)

console.log(list.searchNodeAt(3))

