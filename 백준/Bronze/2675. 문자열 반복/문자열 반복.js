let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //테스트 케이스 개수
let ans = []; //반복 출력된 문자열 넣을 배열 

for (let i = 1; i <= n; i++) {
    let r = Number(input[i].split(' ')[0]); //테스트 반복 횟수
    let s = input[i].split(' ')[1] //테스트 문자열 
    let string = '';
    for (let j = 0; j < s.length; j++) {
        for (let k = 0; k < r; k++)
            string += s[j]
    }
    ans.push(string);
}

for (let i = 0; i < n; i++) {
    console.log(ans[i]);
}