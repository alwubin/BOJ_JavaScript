let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b,c] = input[0].split(' ').map(BigInt);

function answer(a, b, c) {
  //더 이상 나눌 수 없는 경우
  if (b === BigInt(1)) return a % c;
  //짝수인 경우
  if (b % BigInt(2) === BigInt(0)) {
    return answer(a, b / BigInt(2), c) ** BigInt(2) % c;
  } else {
    //홀수인 경우
    return (answer(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * a) % c;
  }
}

let result = answer(a, b, c).toString();
console.log(result);