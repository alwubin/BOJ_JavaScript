let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = BigInt(input[0]); //n의 범위가 Number의 범위를 초과하기 때문에 더 큰 범위의 단위로 변경

console.log(String(n*n*n)); //세 반복문 모두 1~n까지 이므로 수행횟수는 n^3인데, BigInt()로 출력시 뒤에 n이 함께 출력되기 때문에 문자열로 변경후 출력
console.log(3); //수행 횟수가 n^3이므로 최고차항은 3