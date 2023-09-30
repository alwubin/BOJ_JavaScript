let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(arr, depth, start) {
  if (depth == 6) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth+1, i+1);
    selected.pop();
    visited[i] = false;
  }
}



for (let i = 0; i < input.length - 1; i++) {
  arr = input[i].split(' ').map(Number);
  n = arr.shift();
  visited = new Array(n).fill(false);
  selected = [];

  answer = '';
  dfs(arr, 0, 0);
  console.log(answer);
}