let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 포켓몬 개수
let m = Number(input[0].split(' ')[1]); // 문제 수
let ans = [];

let mapNum = new Map(); //포켓몬 번호가 key
let mapName = new Map(); //포켓몬 이름이 key

for (let i = 1; i <= n; i++) {
  mapNum.set(String(i), input[i]);
  mapName.set(input[i], i);
}

for (let i = n+1; i <= n+m; i++) {
  if (!!Number(input[i]) == true) { //숫자이면 mapNum
    ans.push(mapNum.get(input[i]));
  }
  else { //문자이면 mapName
    ans.push(mapName.get(input[i]));
  }
}

console.log(ans.join('\n'));