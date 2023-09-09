let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //data 총 개수
let x = Number(input[0].split(' ')[1]); // 정수 x 
let data = input[1].split(' ').map(Number); 
let arr = ''; //x보다 작은 수 넣을 문자열;

for (let i = 0; i < n; i++) {
    if(data[i] < x) arr += data[i]+' ';
}
arr = arr.slice(0,-1);
console.log(arr);