let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0]; //문자열로 받아서 각 자릿수 비교 
let arr = [];
for (let i = 0; i < num.length; i++) {
  arr.push(Number(num[i])); //각 자릿수 배열에 넣기
}

arr.sort((a,b) => b-a); //내림차순으로 정렬

let result = '';
for (let i = 0; i < arr.length; i++) { //다시 문자열로 변환
  result += arr[i];
}

console.log(result);