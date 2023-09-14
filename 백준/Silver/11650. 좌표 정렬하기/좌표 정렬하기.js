let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) { //(x,y)좌표인 이차원 배열
  let [x,y] = input[i].split(' ').map(Number);
  arr.push([x,y]);
}

function compare(a,b) {
  if (a[0] != b[0]) return a[0] - b[0]; //x좌표가 서로 다를 때 
  else return a[1] - b[1]; //x좌표가 서로 같을 때 y좌표로 비교
}

arr.sort(compare);

let result = '';
for (let point of arr) {
  result += point[0] + ' ' + point[1] + '\n';
}

console.log(result.slice(0,-1));