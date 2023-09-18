let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number); //공 개수와 팀 개수

let sum = 0;
for (let i = 1; i <= k; i++){ //1~k까지의 합
  sum += i;
}
if (sum > n) console.log(-1); //공 개수가 부족한 경우 공이 못들어가는 바구니 발생
else {
  n -= sum;
  if (n % k == 0) console.log(k-1); //n이 k의 배수이므로 각각 하나씩 공을 넣어줌 
  else console.log(k); //k의 배수가 아님 
}