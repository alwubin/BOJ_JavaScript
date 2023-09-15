let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let groups = input[0].split('-') //뺄셈을 기준으로 나눠서 그룹 배열 만들기 
let result = 0;

for (let i = 0; i < groups.length; i++) {
    let cur = groups[i].split('+').map(Number).reduce((a,b) => a+b); //그룹의 각 인덱스는 덧셈이 들어가있으므로 구분해서 다 더해주기 
    if (i == 0) result += cur; //첫번째 그룹은 무조건 덧셈이므로 더해주기
    else result -= cur; //두번째부턴 -() 형태이므로 다 더한 것을 빼주기
}
console.log(result);