let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]) //정수의 개수 
let data = input[1].split(' ').map(Number) //배열 속 숫자 정수로 변환
let x = Number(input[2]) //찾아야하는 정수
let count = 0; //찾아야하는 정수의 총 개수

for (let i = 0; i < n; i++) {
    if (data[i] == x) count += 1;
}

console.log(count);