let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]) //문자열 속에 포함된 n개의 숫자
let nums = input[1]; //숫자 문자열 
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += Number(nums.slice(i,i+1));
}
console.log(sum);