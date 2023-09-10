let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number); //x,y,w,h
let x = data[0];
let y = data[1];
let w = data[2];
let h = data[3];

if (1<=x && x<w && 1<=y && y<h && 1<=w && w<=1000 && 1<=h && h<=1000) {
  let line = [w-x, h-y, x, y]; //직사각형 네 변에 대한 (x,y)사이의 거리 길이
  let result = line.reduce((a,b) => Math.min(a,b));
  console.log(result);
}