let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let x = [];
let y = [];

if (n == 1) console.log(0);
else {
  for (let i = 1; i <= n; i++) {
  x.push(Number(input[i].split(' ')[0]));
  y.push(Number(input[i].split(' ')[1]));
  }

  xmax = x.reduce((a,b) => Math.max(a,b));
  xmin = x.reduce((a,b) => Math.min(a,b));
  ymax = y.reduce((a,b) => Math.max(a,b));
  ymin = y.reduce((a,b) => Math.min(a,b));
  
  let area = (ymax-ymin)*(xmax-xmin);
  console.log(area);
}