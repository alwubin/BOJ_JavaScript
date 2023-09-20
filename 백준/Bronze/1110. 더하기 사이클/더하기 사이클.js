let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let a = input[0];

let num = 0;
let cnt = 0;
if (n.length == 1) { //n이 10보다 작을 때 
  n = '0' + n;
}

while (1) {
  num = Number(n[0]) + Number(n[1]);
  n = n[1] + String(num%10); //다음 수 
  cnt += 1;
  if (Number(a) == Number(n)) 
    break;
}
console.log(cnt);