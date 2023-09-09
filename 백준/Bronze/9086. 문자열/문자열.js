let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); //입력받을 단어 수

for (let i = 1; i <= n; i++) {
    let word = input[i]; //문자열 저장해주기 
    console.log(word[0]+word[word.length-1]); //각 문자열 처음과 끝 출력 
}