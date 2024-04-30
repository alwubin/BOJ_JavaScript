let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, ...homes] = input.map((v) => v.split(' ').map(Number));

const dp = homes;

for (let i = 1; i < n; i++) {
  dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[n - 1]));