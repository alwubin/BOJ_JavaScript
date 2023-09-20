let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]); //고정비용
let b = Number(input[0].split(' ')[1]); //가변비용
let c = Number(input[0].split(' ')[2]); //가격 


if (b < c) {
  let d = parseInt(a/(c-b)+1);
  console.log(d);
}
else console.log(-1);
