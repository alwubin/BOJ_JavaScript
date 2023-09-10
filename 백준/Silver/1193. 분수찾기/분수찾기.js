let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let line = 1; //첫 번째 줄부터 시작 

while (n > line) {
  n -= line; //순서가 몇 번째 인지 
  line += 1; //몇 번째 줄인지
}

if (line % 2 == 0) { //짝수 줄일 때 분모가 큰 수부터 a/b라고 했을 때 
  let a = n;
  let b = line-(n-1);
  console.log(`${a}/${b}`);
}
else { //홀수 줄일 때 분자가 큰 수부터 옴 
  let a = line-(n-1);
  let b = n;
  console.log(`${a}/${b}`);
}