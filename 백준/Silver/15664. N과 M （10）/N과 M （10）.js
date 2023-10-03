let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr =input[1].split(' ').map(Number).sort((a,b) => a-b);
let visited = new Array(n).fill(false);
let selected = [];


let set = new Set();
function dfs (arr, depth, start) {
  if (depth == m) {
    let result = [];
    let ans = '';
    for (let i of selected) result.push(arr[i]);
    for (let x of result) ans += x + ' ';
    set.add(ans);
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth+1,i);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0, 0);
let answer = Array.from(set);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}