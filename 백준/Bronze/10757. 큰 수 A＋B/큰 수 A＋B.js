let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = BigInt(input[0]);
let b = BigInt(input[1]);

console.log(String(a+b));