let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(input) {
  let t = Number(input.shift());
  let answer = [];

  for (let i = 0; i < t; i++) {
    let [a, b] = input[i].split(',').map(Number);
    answer.push(a+b);
  }
  
  answer.forEach((ans) => console.log(ans));
}
solution(input);