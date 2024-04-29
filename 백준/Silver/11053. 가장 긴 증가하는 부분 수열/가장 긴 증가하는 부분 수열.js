let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input.shift())
let arr = input[0].split(' ').map(Number);

function logestIncreasingSubsequence(arr) {
  //동적 계획법을 위함 배열 초기화
  let dp = new Array(n).fill(1);

  //점화식 : 최장 증가 부분 수열 계산
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  //결과중 최대값 반환
  return Math.max(...dp);
}

console.log(logestIncreasingSubsequence(arr));