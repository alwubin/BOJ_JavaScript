let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let nameArr = [];
let sortedArr = [];
for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  nameArr.push(name); //가입순 회원 이름
  sortedArr.push([age,name]); //나이순으로 정렬할 배열 
}

function compare(a,b) {
  if (a[0] != b[0]) return a[0] - b[0]; 
    //나이가 다를 때 나이 순으로 정렬 
  else  nameArr.indexOf(a[1]) - nameArr.indexOf(b[1]);
  //나이가 같을 때 먼저 가입한 순서대로 정렬 
}
sortedArr.sort(compare);

let answer = '';
for (let data of sortedArr) {
  answer += data[0] + ' ' + data[1] + '\n';
}
console.log(answer.slice(0,-1));