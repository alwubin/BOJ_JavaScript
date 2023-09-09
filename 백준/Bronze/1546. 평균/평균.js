let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]) //과목 수 
let scores = input[1].split(' ').map(Number); // 과목 점수 정수로 변환

let maxScore = Math.max(...scores); //가장 높은 점수
let sum = 0;

for (let i = 0; i < n; i++) {// 새로운 점수들의 합 
    sum += scores[i]/maxScore*100; 
}
let average = sum/n;
console.log(average);