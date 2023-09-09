let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxValues = [];
let position = []; //인덱스가 n 값이 m 

for (let i = 0; i < 9; i++) { //n개의 줄마다 최대값과 그 위치
  let arr = input[i].split(' ').map(Number);
  let max = arr.reduce((a,b) => Math.max(a,b));
  
  maxValues.push(max);
  position.push(arr.indexOf(max));
}

let max = maxValues.reduce((a,b) => Math.max(a,b)); //전체 배열의 최대값 
let n = maxValues.indexOf(max); //n번째 행
let m = position[n]; //m번째 열 

let result = '';
result += n+1 + ' ';
result += m+1;
console.log(max);
console.log(result);