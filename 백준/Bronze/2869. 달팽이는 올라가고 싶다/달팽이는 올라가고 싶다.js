let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);
let a = data[0];
let b = data[1];
let v = data[2];

if(1<=b && b<a && a<=v) {
  let result = (v-b)/(a-b);
  console.log(Math.ceil(result)); //소수점이 나오면 n일 넘게 걸린다는 뜻으로 올림해줌
}