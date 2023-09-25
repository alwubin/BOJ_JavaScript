let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;

while (n > 8) {
  n -= 5;
  cnt += 1;
}

if (n % 2 == 1) {
  if (n == 1 || n == 3) {
    console.log(-1);
  }
  else {  //n = 7, 5
    cnt += parseInt(n/5);
    n = n % 5;
    cnt += parseInt(n/2);
    console.log(cnt);
  }
}
else if (n % 2 == 0) { //n = 8, 6, 4, 2
  cnt += parseInt(n/2);
  console.log(cnt);
}