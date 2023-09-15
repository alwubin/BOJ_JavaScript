let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //동전 종류 개수
let k = Number(input[0].split(' ')[1]); //동전으로 바꿔야 하는 것 
let cnt = 0;

let coins = input.map(Number).sort((a,b) => b-a);
coins.shift();


for (let i = 0; i < n; i++) {
  if(parseInt(k/coins[i])>0) {
    cnt += parseInt(k/coins[i]);
    k -= coins[i]*parseInt(k/coins[i]);
  }
}
console.log(cnt);