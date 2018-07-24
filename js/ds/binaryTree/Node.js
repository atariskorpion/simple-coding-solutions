export default class Node {
  constructor(data) {
    this.leftNode = null;
    this.rightNode = null;
    this.data = data;
  }

  insert(value) {
    if (value >= this.data) {
      if (this.leftNode === null) {
        this.leftNode = new Node(value);
      } else {
        this.leftNode.insert(value);
      }
    } else {
      if (this.rightNode === null) {
        this.rightNode = new Node(value);
      } else {
        this.rightNode.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.data) {
      return true;
    } else if (value < this.data) {
      if (this.leftNode === null) {
        return false;
      } else {
        return this.leftNode.contains(value);
      }
    } else if (value > this.data) {
      if (this.rightNode === null) {
        return false;
      } else {
        return this.rightNode.contains(value);
      }
    }
  }
}
