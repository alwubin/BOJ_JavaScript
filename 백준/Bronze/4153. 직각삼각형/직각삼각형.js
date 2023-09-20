let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length-1; i++) { //마지막은 0 0 0으로 들어옴
  let len = input[i].split(' ').map(Number).sort((a,b)=>a-b); //입력받아서 오름차순으로 정렬
  if (len[0] != 0 && len[1] != 0 && len[2] != 0) {
    if (len[0]**2 + len[1]**2 == len[2]**2) console.log('right');
    else console.log('wrong');
  }
}