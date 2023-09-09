let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let getPiece = input[0].split(' ').map(Number); //찾은 체스말 숫자 배열로 변환

let original = [1,1,2,2,2,8]; //원래 체스말 개수
let addDel = []; //체스말 개수 맞추기 

for (let i = 0; i < 6; i++) {
  if (getPiece[i] == original[i]) addDel.push(0);
  else addDel.push(original[i]-getPiece[i]);
}
console.log(addDel.join(' '));