let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';

for (let i = 0; i<n; i++){
  for(let k = 0; k<n-(i+1); k++) {
    result += ' ';
  }
  for (let j = 0; j<=i; j++){
    result += '*';
  }
  result += '\n';
}

console.log(result);