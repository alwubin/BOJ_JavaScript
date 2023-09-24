let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 팔린 책 개수

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

// 중복 배열 개수 map객체로 반환
let map = arr.reduce((a, b) => { 
  a.set(b, (a.get(b) || 0) + 1);
  return a;
}, new Map());

let max = 0;
let book = '';
map.forEach((v,k) => {
  if (v > max) {
    max = v;
    book = k;
  } 
  else if (v == max && k < book) {
    book = k;
  }
});

console.log(book);