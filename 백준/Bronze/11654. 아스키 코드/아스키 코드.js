let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0]; //입력받은 문자 

console.log(word.charCodeAt(0)); //입력받은 문자는 1개이고 문자를 포함한 문자열의 길이도 1이기 때문에 인덱스는 0