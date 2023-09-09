let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

let result = number.toString(n);
console.log(result.toUpperCase()); //10진수에서 n진수로 변환