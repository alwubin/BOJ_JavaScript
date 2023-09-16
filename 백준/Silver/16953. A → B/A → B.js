let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]); 
let b = Number(input[0].split(' ')[1]); 
let cnt = 1;
let flag = false;

while (a <= b){
  if (b == a) { //값이 같아질 때 cnt +1 출력 
    flag = true;
    break;
  }
  if (b % 10 == 1) b = parseInt(b/10);
  else if (b % 2 == 0) b = parseInt(b/2);
  else break; //둘다 아니면 계산 성립안됨
  cnt++;
}
if (flag) console.log(cnt);
else console.log(-1);