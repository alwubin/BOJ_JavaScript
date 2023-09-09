let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));
//reduce는 내부적으로 reduce(함수)처럼 함수를 넣어 내부에 있는 함수의 결과값 반환됨
//결과적으로 최소값과 최대값이 도출된다.
let min = data.reduce((a,b) => Math.min(a,b));
let max = data.reduce((a,b) => Math.max(a,b));

console.log(min + ' ' + max);