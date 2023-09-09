let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input.length - 1; //마지막은 0 0이므로

for (let i = 0; i < n; i++) {
  let data = input[i].split(' ').map(Number);
  let a = data[0];
  let b = data[1];
  if (a != b) {
      if(a%b == 0) console.log('multiple');
      else if(b%a == 0) console.log('factor');
      else console.log('neither');
  }
}