let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

console.log(n*n); //n만큼 반복하는 반복문 속에 n만큼 반복하는 또 다른 반복문이 속해 있으므로 수행시간은 n*n
console.log(2); //수행시간이 n*n이므로 최고차항은 2