let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) data.push(input[i].split(' ').map(Number));


data.sort(function (a,b) { 
  if (a[1] != b[1]) return a[1] - b[1]; //먼저 종료시간 기준으로 정렬
  else return a[0] - b[0]; //종료시간이 같을 시, 시작시간이 더 빠른 걸로 정렬
}); 

let cnt = 1;
let cur = 0; //현재 회의 종료 시간 

for (let i = 1; i < n; i++) { //data의 첫번째 회의 정보 제외
  if (data[i][0] >= data[cur][1]) { //다음 회의 시작 시간이 현재 회의 종료 시간과 같거나 클 때
    cnt += 1; //다음 회의 시작됨
    cur = i; //현재 회의로 바꿈 
  }
}
console.log(cnt);