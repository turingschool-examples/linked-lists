import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let newHead = new Node(data);

      newHead.next = this.head;
      this.head = newHead;
    }
  }

  shift() {
    this.length--;

    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }

      return removedHead;
    }
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
    } else {
      this.length--;

      if (!this.head.next) {
        let removedHead = this.head;

        this.head = null;
        return removedHead;
      } else {
        let currNode = this.head;

        while (currNode.next.next) {
          currNode = currNode.next;
        }

        let lastNode = currNode.next;

        currNode.next = null;

        return lastNode;
      }
    }
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

  delete(data) {
    if (this.head.data === data) {
      this.length--;
      this.head = this.head.next;
    }

    let currNode = this.head;
    let prevNode = null;

    while (currNode) {
      if (currNode.data === data) {
        prevNode.next = currNode.next;
        this.length--;
        break;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }

  toArray() {
    let array = [];
    let currNode = this.head;

    while (currNode) {
      array.push(currNode.data);
      currNode = currNode.next;
    }

    return array;
  }

  include(data) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        return true;
      } else {
        currNode = currNode.next
      }
    }

    return false;
  }

  index(data) {
    let nodeToCheck = this.head;
    let count = 0;

    while (nodeToCheck) {
      if (nodeToCheck.data === data) {
        return count;
      } else if (nodeToCheck.next === null) {
        return null;
      }

      nodeToCheck = nodeToCheck.next;
      count++;
    }
  }

  insert(index, data) {
    let currNode = this.head;
    let count = 0;
    let newNode = new Node(data);

    while (count <= index) {
      count++;

      if (count === index) {
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
      }

      currNode = currNode.next;
    }
  }

  insertAfter(find, data) {
    let currNode = this.head;
    let newNode = new Node(data);

    if (!currNode.next) {
      return null;
    }

    while (currNode.data !== find) {
      currNode = currNode.next
    }

    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;
  }

  distance(first, second) {
    let count;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === first) {
        count = 0;
      }

      count++;
      currNode = currNode.next;

      if (currNode.data === second) {
        return count;
      }
    }
  }
}
