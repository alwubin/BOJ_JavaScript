let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0].split(' ')[0];
let n = Number(input[0].split(' ')[1]);

console.log(parseInt(word, n)); //n진수에서 10진수로 변환