let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//먼저 문자열로 받아오기 
let a = input[0].split(' ')[0];
let b = input[0].split(' ')[1]; 
//각 문자열을 split('')으로 각 자리로 분리하여 배열로 저장, reverse()로 배열 반대로, join('')로 배열의 요소들을 하나의 문자열로 합침
a = Number(a.split('').reverse().join(''));
b = Number(b.split('').reverse().join(''));

if (a>b) console.log(a);
else console.log(b);