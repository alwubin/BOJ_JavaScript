let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let fourth = []; //4번째 변 
let xs = [];
let ys = [];

for (let i = 0; i < 3; i++) {
  let x  = Number(input[i].split(' ')[0]);
  xs.push(x);
}
if (xs[0] == xs[1]) fourth.push(xs[2]);
else if (xs[0] == xs[2]) fourth.push(xs[1]);
else fourth.push(xs[0]);


for (let i = 0; i < 3; i++) {
  let y  = Number(input[i].split(' ')[1]);
  ys.push(y);
}
if (ys[0] == ys[1]) fourth.push(ys[2]);
else if (ys[0] == ys[2]) fourth.push(ys[1]);
else fourth.push(ys[0]);

console.log(fourth.join(' '));