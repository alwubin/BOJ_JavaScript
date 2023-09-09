let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let totalCost = Number(input[0]);
let n = Number(input[1]);
let sum = 0;

for (let i = 2; i <= n+1; i++) {
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    sum += x*y;
}

if (sum == totalCost) console.log('Yes');
else console.log('No');