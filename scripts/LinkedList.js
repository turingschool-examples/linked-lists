import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    this.length++;

    // if we do not have a value at this.head, create one
    if (!this.head) {
      this.head = new Node(data);

    // if this.head has an object, find last node in our list starting at this.head
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = new Node(data);
    }
  }
}