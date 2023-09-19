let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i =1; i <= n; i++) {
  arr.push(Number(input[i])); // 로프 배열에 넣어주기 
}
arr.sort((a,b) => a-b); //오름차순으로 정렬하기
let max = 0;
for (let i = 0; i < n; i++) {
  let sum = (n-i)*arr[i]; // arr[i]~arr[n]까지 중량 구하기
  if (sum > max) max = sum; //최대일 때 최대값에 넣어주기
}
console.log(max);