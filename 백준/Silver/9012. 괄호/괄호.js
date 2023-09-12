let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input.shift();
let result = []; //결과값 출력 문자열 


for (let i = 0; i < n; i++) {
  let string = input[i]; //각 행마다의 문자열 
  let sum = 0;
  for (let j = 0; j < string.length; j++) {
    if (string[j] == '(') sum += 1; // ( 는 +1, ) 는 -1
    else {
      sum -= 1;
      if (sum < 0) { //중간에 sum이 -1이 되어버리면 )먼저 나온거기 때문에 온전환 괄호가 될 수 없으므로 반복문 나옴 
        break;
      }
    }
  }
  if (sum == 0) result.push('YES');
  else  result.push('NO');
}

console.log(result.join('\n'));