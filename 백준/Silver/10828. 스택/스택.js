let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let stack = [];
let result = [];

for (let i = 1; i <= n; i++) {
  let order = input[i]; 
  if (order.length < 6) {
    if (order == 'pop') {
      if (stack.length == 0) result.push(-1);
      else {
        let pop = stack.pop();
        result.push(pop);
      }
    }
    else if (order == 'size') result.push(stack.length);
    else if (order == 'empty') {
      if (stack.length == 0) result.push(1);
      else result.push(0);
    }
    else if (order == 'top') {
      if (stack.length == 0) result.push(-1);
      else result.push(stack[stack.length-1]);
    }
  }
  else {
    num = Number(input[i].split(' ')[1]);
    stack.push(num);
  }
}
console.log(result.join('\n'));