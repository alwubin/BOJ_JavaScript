let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //명령 수 
let stack = []; //스택 선언
let result = '';

for (let i = 1; i <= n; i++) {
  if (input[i].length == 1) {
    let order = Number(input[i]);
    if (order == 2) { //명령 2
      if (stack.length == 0) result += -1 + '\n';
      else {
        let head = stack[stack.length-1] //젤 마지막 값
        stack.pop(); //최상위 원소 제거
        result += head + '\n'; //제거한 최상위 원소 출력 
      }
    }
    else if (order == 3) { //명령 3
      result += stack.length + '\n';
    }
    else if (order == 4) { //명령 4
      if (stack.length == 0) result += 1 + '\n';
      else result += 0 + '\n';
    }
    else if (order == 5) { //명령 5
      if (stack.length == 0) result += -1 + '\n';
      else {
        result += stack[stack.length-1] + '\n';
      }
    }
  }
  else { //명령 1
    let num = Number(input[i].split(' ')[1]);
    stack.push(num);
  }
}
console.log(result.slice(0, -1));