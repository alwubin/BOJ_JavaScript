let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 출력할 숫자의 개수 
let data = input[1].split(' ').map(Number); //출력된 숫자들 배열
let cnt = 0; //소수
if (n <= 100) {
  for (let i = 0; i < n; i++) {
    let num = data[i]; 
    let arr = []; //num의 약수 배열 
    for (let j = 1; j <= num; j++) {
      if (num%j == 0) arr.push(j);
    }
    if (arr.length == 2) cnt += 1;
  }
  console.log(cnt);
}