let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //n개의 테스트 케이스
let answer = ''; //빈 문자열 생성

for (let i = 1; i<=n; i++) {
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    let sum = x+y;
    answer += sum + '\n'; //문자열로 변환하여 값 저장
}

console.log(answer);