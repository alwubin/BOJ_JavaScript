let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let pyramid = new Array(n).fill().map(() => []);

for (let i = 1; i <= n; i++) {
  const row = input[i].split(' ').map(Number);
  pyramid[i - 1].push(...row);
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < pyramid[i].length; j++) {
    if (j === 0) pyramid[i][j] = pyramid[i - 1][j] + pyramid[i][j];
    else if (j === pyramid[i].length - 1) pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i][j];
    else pyramid[i][j] = Math.max(pyramid[i - 1][j - 1], pyramid[i - 1][j]) + pyramid[i][j];
  }
}

console.log(Math.max(...pyramid[n - 1]));