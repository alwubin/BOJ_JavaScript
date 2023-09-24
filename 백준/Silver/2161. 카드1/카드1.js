let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
queue = new Queue();

let n = Number(input[0]); 
let del = [];
for (let i = 1; i <= n; i++) {
  queue.enqueue(i);
}

for (let i = 0; i < n-1; i++) {
  del.push(queue.dequeue());
  queue.enqueue(queue.dequeue());
}
del.push(queue.dequeue());
console.log(del.join(' '));