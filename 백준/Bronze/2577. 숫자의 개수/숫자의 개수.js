let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let mul = String(a*b*c);
let arr = new Array(10).fill(0); //0~9까지 개수 셀 배열

for (let i = 0; i < mul.length; i++) {
  for (let j = 0; j < 10; j++) { //문자열이 배열의 인덱스와 같을 때
    if (Number(mul[i]) == j) arr[j] += 1; //개수 세줌
  }
}
console.log(arr.join('\n'));