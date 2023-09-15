let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);
let score = input[1].split(' ').map(Number);

score.sort((a,b) => b-a); //내림차순으로 정렬 

console.log(score[k-1]);