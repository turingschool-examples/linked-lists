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

  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }

    return foundNode;
  }

  toArray() {
    let array = [];
    let currNode = this.head;

    while (currNode) {
      // add data to array
      array.push(currNode.data);

      // go to the next node
      currNode = currNode.next;
    }

    return array;
  }

  insert(position, data) {
    let node = new Node(data);
    let currNode = this.head;
    let currPos = 0;

    while(currPos < position - 1) {
      currNode = currNode.next;
      currPos++;
    }

    node.next = currNode.next;
    currNode.next = node;
    this.length++;
  }
}