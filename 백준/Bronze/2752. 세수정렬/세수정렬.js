let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number);

function compare(a,b) {
  if (a<b) return -1;
  else if (a>b) return 1;
  else return 0;
}

arr.sort(compare);
console.log(arr.join(' '));