let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let lengths = []; //5줄 중에서 어떤 줄이 단어길이가 긴지
let result = ''; //세로로 이어붙인 단어

let arr0 = input[0];
let arr1 = input[1];
let arr2 = input[2];
let arr3 = input[3];
let arr4 = input[4];

for (let i = 0; i < 5; i++) {
  lengths.push(eval('arr'+i).length);
}

let max = lengths.reduce((a,b) => Math.max(a,b)); //가장 긴 길이 

for (let i = 0; i < max; i++) {
  for (let j = 0; j < 5; j++) {
    result += eval('arr'+j)[i]; //세로로 다 더해주기 
  }
}
//문자열 길이가 짧은 경우엔 세로로 더할 시 undefined값으로 추가됨 
//indexOf()로 undefined 제거
if (result.indexOf('undefined') != -1){
  while (result.indexOf('undefined') != -1) {
    result = result.replace('undefined', '');
}}

console.log(result);