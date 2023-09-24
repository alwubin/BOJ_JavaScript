let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //직원 출퇴근 여부 개수

let map = new Map(); //맵 객체 선언

for(let i = 1; i <= n; i++) {
  let staff = input[i].split(' ')[0];
  let el = input[i].split(' ')[1];
  map.set(staff, el);
}

let stay = [];
for (let staff of map.keys()) {
  if (map.get(staff) == 'leave') map.delete(staff); //다시 출근하는 사람 존재
  else stay.push(staff);
}
stay.sort().reverse();
console.log(stay.join('\n'));