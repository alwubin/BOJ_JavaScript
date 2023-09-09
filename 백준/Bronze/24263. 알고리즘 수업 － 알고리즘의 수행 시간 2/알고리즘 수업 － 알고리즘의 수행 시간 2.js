let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //입력받은 n값 만큼 수행

console.log(n);
console.log(1); //n만큼 변하기 때문에 O(n)이므로 최고차항은 1