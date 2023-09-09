let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
//i가 반복하는 횟수가 n-1일 때, j는 반복 횟수가 n-1~1로 줄어들며, 
//수행 횟수는 등차수열의 합으로 첫 항은 n-1 마지막 항은 1으로 n까진 합 공식
console.log(n*(n-1)/2); 
console.log(2); //합 공식으로 수행횟수를 구했을 때 최고차항은 2