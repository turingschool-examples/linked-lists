import Node from './Node';
export default class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = new Node(data);
    }
  }

  pop() {
    if (!this.head) {
      return null;
    } 

    if (this.length === 1) {
      let node = this.head;
      this.head = null
      this.length--;

      return node;
    }
  
    let currNode = this.head;
    let prevNode;

    while(currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    
    prevNode.next = null;
    this.length--;

    return currNode;
  }
}