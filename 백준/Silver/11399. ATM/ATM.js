let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let time = [];
let total = 0;

arr.sort((a,b) => a-b);

for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum += arr[j]
  }
  time.push(sum);
  total += sum;
}

console.log(total);