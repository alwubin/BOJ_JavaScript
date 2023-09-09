let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]); //테스트케이스 개수 n 
//동전 종류
let q = 25;
let d = 10;
let n = 5;
let p = 1;

for (let i = 1; i <= t; i++) {
  let left = Number(input[i]);
  let result = [];
  //거스름돈 계산
  result.push(parseInt(left/q));
  left -= q * parseInt(left/q);
  result.push(parseInt(left/d));
  left -= d * parseInt(left/d);
  result.push(parseInt(left/n));
  left -= n * parseInt(left/n);
  result.push(parseInt(left/p));

  console.log(result.join(' '));
}