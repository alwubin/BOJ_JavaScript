let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);

let maxValue = arr.reduce((a,b) => Math.max(a,b));

console.log(maxValue);
console.log(arr.indexOf(maxValue)+1);