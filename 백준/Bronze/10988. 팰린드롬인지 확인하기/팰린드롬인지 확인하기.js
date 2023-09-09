let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0]; //입력받은 단어 문자열 저장 
let cnt = 0; // 펠린드롬 구분 

for (let i = 0; i < parseInt(word.length/2); i++) {
  if(word[i] == word[word.length-(i+1)]) cnt += 1; //마주보는 문자가 같을시 +1
  else cnt -= 1; 
}
if (parseInt(word.length/2) == cnt) console.log(1); //펠린드롬
else console.log(0); //아님