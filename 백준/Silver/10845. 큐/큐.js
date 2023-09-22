let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //명령문 개수 
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

let queue = [];
let ans = []
for (let i = 0; i < n; i++) {
  if (arr[i].length >= 6) { //push
    let num = Number(arr[i].split(' ')[1]);
    queue.push(num);
  }
  else if (arr[i] == 'pop') {
    if (queue.length > 0) {
      let pop = queue.shift();
      ans.push(pop);
    }
    else ans.push(-1);
  }
  else if (arr[i] == 'size') {
    ans.push(queue.length);
  }
  else if (arr[i] == 'empty') {
    if (queue.length == 0) ans.push(1);
    else ans.push(0);
  }
  else if (arr[i] == 'front') {
    if (queue.length > 0) {
      ans.push(queue[0]);
    }
    else ans.push(-1);
  }
  else if (arr[i] == 'back') {
    if (queue.length > 0) {
      ans.push(queue[queue.length -1]);
    }
    else ans.push(-1);
  }
}
console.log(ans.join('\n'));
