let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0]; //입력받은 단어 문자열
let croA = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']; //크로아티아 알파벳 

let cnt = 0;

//크로아티아 알파벳 제거시, 제거후 문자열에서 또 크로아티아 알파벳이 생성될 수 있음
//그래서 제거하고 공백 넣어주기 
for (let i = 0; i < 8; i++) {
  if(word.indexOf(croA[i]) > -1) {
      while(word.indexOf(croA[i]) != -1) { //반복된 값이 없을 때까지 반복문 돌림
        word = word.replace(croA[i], ' ');
        cnt += 1;
      }
    }
  }
//문자열 공백 제거하고 크로아티아 알파벳 아닌 문자 개수 구하기
result = word.split(' ').join('');
console.log(cnt + result.length);