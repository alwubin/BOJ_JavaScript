let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [0, 1];
let i = 0;

function fibonacci(n) {
  if (i <= n) {
    arr.push(arr[i] + arr[i + 1]);
    i++;
    fibonacci(n);
  } else {
    console.log(arr[n])
  }
}

fibonacci(n);
