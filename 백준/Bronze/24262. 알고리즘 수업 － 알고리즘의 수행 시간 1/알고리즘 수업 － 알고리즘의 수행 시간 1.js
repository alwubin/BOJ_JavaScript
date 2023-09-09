let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(1); // n을 넣었을 때 반복문이나 다른 함수가 따로 없이 계산 후 출력이기 때문에 수행 시간은 무조건 1번
console.log(0); // 수행시간이 1일 때는 O(1)로 상수 시간이므로 최고 차항은 0