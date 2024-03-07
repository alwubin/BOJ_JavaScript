let fs = require('fs');
let [n, ...values] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

class Heap {
    constructor() {
        this.heap = [undefined];
        this.size = 0;
    }
    
    push(value) {
        this.heap.push(value);
        this.size++;
        
        let i;
        
        for(i = this.size; 
            i != 1 && value < this.heap[Math.floor(i / 2)]; 
            i = Math.floor(i / 2)) {
            this.heap[i] = this.heap[Math.floor(i / 2)];
        }
        
        this.heap[i] = value;
    }
    
    pop() {
        if (this.size === 0) return 0;
        
        let v1 = this.heap[1];
        let v = this.heap.pop();
        this.size--;
        
        let i = 1;
        let child;
        while (i <= this.size) {
            let leftChd = Infinity;
            let rightChd = Infinity;
            
            child = 2 * i;
            
            if (child <= this.size && v > this.heap[child])
                leftChd = this.heap[child];

            child++;
            if (child <= this.size && v > this.heap[child])
                rightChd = this.heap[child];
            
            if (leftChd == Infinity && rightChd == Infinity) break;
            
            if (leftChd <= rightChd) child--;
            this.heap[i] = this.heap[child];
            i = child;
        }
        
        this.heap[i] = v;
        
        return v1;
    }
}

let heap = new Heap();
let answer = [];

values.forEach((value) => {
    if (value === 0) {
        answer.push(heap.pop());
    }
    else {
        heap.push(value);
    }
});

if (answer.length > 0) console.log(answer.join('\n'));