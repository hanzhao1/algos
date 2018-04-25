const node = {
  head : {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null
        }
      }
    }
  }
}

// console.log(node)


const reverseLinkedList = (list) => {
  let prev = null;
  let current = list.head;
  let next;
  while(current !== null){
    next = current.next;

  }
}

console.log(reverseLinkedList(node))
