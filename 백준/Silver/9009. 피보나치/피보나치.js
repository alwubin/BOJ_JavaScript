let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]); //테스트 케이스 

let arr = [0,1];

for (let i = 2; i < 45; i++) { //arr[44]까지 피보나치 
  arr.push(arr[i-2]+arr[i-1]);
}

arr.sort((a,b) => b-a); //내림차순으로 정렬 

for (let i = 1; i <= t; i++) {
  let num = Number(input[i]);
  let result = [];
  for (let j = 0; j < 45; j++) {
    if (arr[j] <= num && arr[j] != 0) {
      num -= arr[j];
      result.push(arr[j]);
    }
  }
  result.reverse();
  console.log(result.join(' '));
}