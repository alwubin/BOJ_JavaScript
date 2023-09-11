let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //명령 수 
let stack = []; //스택 선언
let sum = 0;


for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);
  if (num != 0) stack.push(num);
  else stack.pop();
}
for (let i = 0; i < stack.length; i++) {
  sum += stack[i]
}

console.log(sum);