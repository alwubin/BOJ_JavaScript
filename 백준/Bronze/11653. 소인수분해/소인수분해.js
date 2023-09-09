let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let arr = [];

if (n > 0) {
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      while (n%i==0 && n>0) {
        arr.push(i);
        n = parseInt(n/i);
      }
    }
  }
  for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
}