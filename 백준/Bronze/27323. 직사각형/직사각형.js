let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]); 
let b = Number(input[1]);

if( a >= 1 && b >= 1) {
  let area = a*b;
  console.log(area);
}