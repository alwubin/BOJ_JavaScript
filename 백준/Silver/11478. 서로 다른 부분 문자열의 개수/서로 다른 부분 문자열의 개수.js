let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s/);

let str = input[0];
let answer = new Set();

for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
        answer.add(str.substring(i, j+1));
    }
}

console.log(answer.size);