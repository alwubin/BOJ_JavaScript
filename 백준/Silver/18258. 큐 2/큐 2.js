let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, ...commands] = input;

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(item) {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size += 1;
    }
    
    getSize() {
        return this.size;
    }
    
    pop() {
        if (this.size > 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.size -= 1;
            return item;
        }
        else if (this.size === 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.tail = newHead;
            this.size -= 1;
            return item;
        }
        else if (this.size === 1) {
            const item = this.head.item;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return item;
        } 
        else {
            return -1;
        }
    }
    
    empty() {
        return this.size ? 0 : 1;
    }
    
    front() {
        return this.head ? this.head.item : -1;
    }
    
    back() {
        return this.tail ? this.tail.item : -1;
    }
}

function solution(n, commands) {
    let answer = '';
    const queue = new Queue();
    
    for (let i = 0; i < n; i++) {
        const command = commands[i].split(' ')[0];
        
        switch (command) {
            case 'push':
                const item = commands[i].split(' ')[1];
                queue.push(item);
                break;
            case 'pop':
                answer += queue.pop() + ' ';
                break;
            case 'front':
                answer += queue.front() + ' ';
                break;
            case 'back':
                answer += queue.back() + ' ';
                break;
            case 'empty':
                answer += queue.empty() + ' ';
                break;
            case 'size':
                answer += queue.getSize() + ' ';
                break;
            default:
                break;
        }
    }
    return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);