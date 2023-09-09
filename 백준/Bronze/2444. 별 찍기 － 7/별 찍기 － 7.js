let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); //별을 출력할 줄 2n-1까지 
let star = ''; //출력한 별을 넣을 문자열 

for (let i = 0; i < n; i++) { //n번째 줄까지 
  for (let j = 0; j < n-(i+1); j++) {
    star += ' ';
  }
  for (let k = 0; k < 2*i+1; k++) {
    star += '*';
  }
  star += '\n';
}
for (let i = n-2; i >=0; i--) { //거꾸로 출력
  for (let j = 0; j < n-(i+1); j++) {
    star += ' ';
  }
  for (let k = 0; k < 2*i+1; k++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);