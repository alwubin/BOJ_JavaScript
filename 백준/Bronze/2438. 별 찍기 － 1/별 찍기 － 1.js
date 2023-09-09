let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';

for(let i = 0; i<n; i++) {
  for(let j = 0; j<=i; j++) {
     result += '*'; //i층엔 j개 만큼 별 저장 
  }
  result += '\n'; //각 행마다는 줄바꿈이 필요하기 때문에
}
console.log(result);