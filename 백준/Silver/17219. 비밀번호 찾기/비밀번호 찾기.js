let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //저장된 사이트 주소 수
let m = Number(input[0].split(' ')[1]); //비밀번호 찾을 주소 수 

let map = new Map(); //맵 객체 선언

for(let i = 1; i <= n; i++) {
  let site = input[i].split(' ')[0];
  let pw = input[i].split(' ')[1];
  map.set(site, pw);
}

for (let i = n+1; i <= n+m; i++) {
  console.log(map.get(input[i]));
}
