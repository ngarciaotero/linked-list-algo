export function createNode(initialValue) {
  let value = initialValue;
  let next = null;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  function getNext() {
    return next;
  }

  function setNext(nextNode) {
    next = nextNode;
  }

  return {
    getValue,
    setValue,
    getNext,
    setNext,
  };
}
