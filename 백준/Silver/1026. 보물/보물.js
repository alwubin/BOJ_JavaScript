let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);

let copy = [...b];
a.sort((a,b) => a-b);
copy.sort((a,b) => b-a);
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += a[i] * copy[i];
}
console.log(sum);