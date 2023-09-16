let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]); //테스트 케이스 
let l = 1;
for (let tc = 0; tc < t; tc++) {
  let n = Number(input[l]);
  let arr = [];
  for (let i = l+1; i <= l+n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((a,b) => a[0] - b[0]); //서류 점수를 기준으로 정렬 
  let cnt = 0;
  let min = 100001;
  for (let [a,b] of arr) {
    if (b < min) {
      min = b;
      cnt += 1;
    }
  }
  console.log(cnt);
  l += n+1;
}