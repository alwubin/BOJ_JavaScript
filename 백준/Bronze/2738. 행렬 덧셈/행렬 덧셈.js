let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let arr3 = '';

for (let i = 1; i <= n; i++) {
  let line1 = input[i].split(' ').map(Number);
  let line2 = input[i+n].split(' ').map(Number);
  for (let j = 0; j < m; j++) {
    arr3 += line1[j] + line2[j] + ' ';
  }
  arr3 += '\n';
}

console.log(arr3.trim());