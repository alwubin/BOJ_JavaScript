let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let map = new Map();
let cnt = 0;

for (let i = 1; i <= n; i++) {
  map.set(input[i], 's');
}
for (let i = n+1; i <= n+m; i++) {
  if (map.has(input[i])) cnt += 1;
}
console.log(cnt);