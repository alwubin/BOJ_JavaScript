let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let copyarr = input[1].split(' ').map(Number);


copyarr = [...new Set(copyarr)] //중복 제거후 배열 변환

copyarr.sort(function (a,b) {
  return a-b; // 오름차순으로 정렬
})

let map = new Map(); //0부터 차례대로 mapping 수행 키-값으로 생성
for (let i = 0; i < copyarr.length; i++) {
    map.set(copyarr[i], i); //새로운 map 객체에 키-값으로 넣어주기
}
let answer = '';
for (x of arr) answer += map.get(x) + ' '; //x라는 키를 map에 넣어주면 그에 따른 value 출력
console.log(answer);
