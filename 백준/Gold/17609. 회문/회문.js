let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]); //단어 개수 

function palindrome(x) {
  return x == x.split('').reverse().join(''); //문자열을 뒤집었을 때랑 문자열이랑 같으면 회문 
}

for (let tc = 1; tc <= testCase; tc++) {
  let word = input[tc];
  if (palindrome(word)) console.log(0); //회문
  else { //회문 아닐 때 유사 회문인지 검사
    let found = false;
    let n = word.length; //단어 길이 
    for (let i = 0; i < parseInt(n/2); i++) {
      if (word[i] != word[n-(i+1)]) {
        if (palindrome(word.slice(0,i) + word.slice(i+1,n))) found = true; //앞에 문자를 제거하고 회문인지 확인
        if (palindrome(word.slice(0,n-(i+1)) + word.slice(n-i, n))) found = true; //뒤에 문자를 제거하고 회문인지 확인
        break;
      }
    }
    if (found) console.log(1); //유사회문
    else console.log(2); //일반 문자열 
  }
}