let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Queue {
    constructor() {
        this.items = {};
        this.hIndex = 0;
        this.tIndex = 0;
    }
    enqueue(item) {
        this.items[this.tIndex] = item;
        this.tIndex++;
    }
    dequeue() {
        const item = this.items[this.hIndex];
        delete this.items[this.hIndex];
        this.hIndex++;
        return item;
    }
    peek() {
        return this.items[this.hIndex];
    }
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

let queue = new Queue();
let n = Number(input[0]);

for(let i = 0; i < n; i++) {
    queue.enqueue(i+1);
}

for (let i = 0; i < n-1; i++) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
}
console.log(queue.dequeue());
