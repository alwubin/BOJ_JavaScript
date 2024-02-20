let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = 1;
for(let i = 1; i < Number(input[0])+1; i++) {
    answer *= i;
}

console.log(answer);