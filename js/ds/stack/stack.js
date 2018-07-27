class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items === [];
  }

  push(item = undefined) {
    if (item) {
      this.items.push(item);
    }
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length-1];
  }

  size() {
    return this.items.length;
  }
}

export default Stack;
