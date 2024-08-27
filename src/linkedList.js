import { createNode } from "./node.js";

export function linkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  // add node to end of list
  function append(value) {
    const newNode = createNode(value);
    if (tail) {
      tail.setNext(newNode);
    } else {
      head = newNode;
    }
    tail = newNode;
    size++;
  }

  // add node to start of list
  function prepend(value) {
    const newNode = createNode(value);
    if (head) {
      newNode.setNext(head);
    } else {
      tail = newNode;
    }
    head = newNode;
    size++;
  }

  // get list length
  function getSize() {
    return size;
  }

  // get first node
  function getHead() {
    return head;
  }

  // get last node
  function getTail() {
    return tail;
  }

  // get node at given index
  function at(index) {
    if (index >= size || index < 0) return null;

    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.getNext();
    }
    return currentNode;
  }

  // remove last node
  function pop() {
    if (size === 0) return;

    if (size === 1) {
      head = null;
      tail = null;
    } else {
      let secondToLast = at(size - 2);
      secondToLast.setNext(null);
      tail = secondToLast;
    }
    size--;
  }

  // remove first node
  function shift() {
    if (size === 0) return;

    head = head.getNext();
    if (size === 1) {
      tail = null;
    }
    size--;
  }

  // checks if value exists
  function contains(value) {
    let currentNode = head;
    while (currentNode) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNext();
    }
    return false;
  }

  // gets the index of found value
  function find(value) {
    let currentNode = head;
    let i = 0;
    while (currentNode) {
      if (currentNode.getValue() === value) {
        return i;
      }
      currentNode = currentNode.getNext();
      i++;
    }
    return null;
  }

  // print list
  function toString() {
    let listStr = "";
    let currentNode = head;
    while (currentNode) {
      listStr += `( ${currentNode.getValue()} )`;

      if (currentNode.getNext()) {
        listStr += " -> ";
      } else {
        listStr += ` -> ${currentNode.getNext()}`;
      }

      currentNode = currentNode.getNext();
    }
    return listStr;
  }

  // add value at given index
  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
    } else if (index === getSize()) {
      append(value);
    } else {
      let newNode = createNode(value);
      let previousNode = at(index - 1);
      newNode.setNext(previousNode.getNext());
      previousNode.setNext(newNode);
      size++;
    }
  }

  // remove value at given index
  function removeAt(index) {
    if (index === 0) {
      shift();
    } else if (index === getSize() - 1) {
      pop();
    } else {
      let previousNode = at(index - 1);
      let removeNode = previousNode.getNext();
      previousNode.setNext(removeNode.getNext());
      size--;
    }
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
