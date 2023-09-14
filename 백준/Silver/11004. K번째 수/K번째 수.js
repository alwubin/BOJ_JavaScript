let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let arr = input[1].split(' ').map(Number);

arr.sort(function(a,b) {
  return a-b;
})

console.log(arr[k-1]); //k번째는 인덱스로 k-1번째