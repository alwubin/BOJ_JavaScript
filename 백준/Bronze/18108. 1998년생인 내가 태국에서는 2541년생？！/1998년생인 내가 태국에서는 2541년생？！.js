let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
console.log(a - 543);