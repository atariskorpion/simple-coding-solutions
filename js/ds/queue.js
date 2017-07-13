class Queue {
  constructor () {
    this.items = [];
  }

  isEmpty () {
    return this.items === [];
  }

  enqueue (item = undefined) {
    if (item) {
      this.items.unshift(item);
    }
  }

  dequeue () {
    return this.items.pop();
  }

  size () {
    return this.items.length;
  }
}
