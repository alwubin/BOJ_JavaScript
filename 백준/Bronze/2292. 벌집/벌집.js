let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let i = 1;
let j = 1;
let cnt = 1;

while (j < n) {
  j += 6*i; // 칸을 지날수록 6의 배수만큼 커짐 
  cnt += 1;
  i++;
}
console.log(cnt);