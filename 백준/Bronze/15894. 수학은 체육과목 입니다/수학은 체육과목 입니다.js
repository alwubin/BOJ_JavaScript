let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //가장 밑 층의 사각형 개수 

console.log(4*n); 