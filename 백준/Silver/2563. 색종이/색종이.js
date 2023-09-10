let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let row = 101;
let column = 101;
let arr = new Array(row);
for (var i = 0; i < column; i++) { //arr[101][101] 배열 생성
    arr[i] = new Array(101).fill(0);
}
let sum = 0; // 색종이 넓이의 총합 

for (let i = 1; i <= n; i++) {
  let x = Number(input[i].split(' ')[0]);
  let y = Number(input[i].split(' ')[1]);

  for (let i = 1; i <= 10; i++) { //입력받은 (x,y)부터 (x+10,y+10)까지 정사각형의 넓이에 해당하는 부분
    for (let j = 1; j <= 10; j++) {
      arr[x+i][y+j] = 1; //넓이에 해당되기 때문에 모두 0 -> 1 변환 
    }
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
     sum += arr[i][j]; //해당되지 않는 부분은 0 해당되는 부분은 1이기 때문에 모두 더해주면 해당되는 부분의 합만 나옴
  }
}
console.log(sum);