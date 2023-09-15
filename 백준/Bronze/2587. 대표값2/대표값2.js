let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
  arr.push(Number(input[i]));
  sum += Number(input[i]);
}
arr.sort((a,b) => a-b); //오름차순으로 정렬

console.log(sum/5);
console.log(arr[2]);