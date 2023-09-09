let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let m = Number(input[1]);
let sum = 0;
let prim = []; //소수 배열 

if (n > 0 && m > 0) {
  for (let i = n; i <= m; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      if (i%j == 0) arr.push(j);
    }
    if (arr.length == 2) prim.push(i); //소수 
  }
  
  if (prim.length > 0) { //소수가 1개 이상일 때 
    for (let i = 0; i < prim.length; i++) {
      sum += prim[i];
    }
    console.log(sum);
    console.log(prim[0]);
  }
  else console.log(-1); //소수가 없을 때 
}
