let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let result = '';

for (let i = 1; i <= t; i++){
  let arr = input[i].split(' ').map(Number);
  arr.sort((a,b) => a-b);
  console.log(arr[7]);
}