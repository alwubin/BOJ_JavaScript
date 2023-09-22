let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let d = new Array(n + 1).fill(1);
arr.reverse();
// 최장 증가 부분 수열
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (arr[i] > arr[j]) {
      d[i] = Math.max(d[i], d[j] + 1);
    }
  }
}
let ans = 0;
for (let i = 0; i <= n; i++) {
  ans = Math.max(ans, d[i]);
}
console.log(n - ans);