let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input.shift());
let arr = [];
let answer = [];

for (let i = 0; i < n; i++) {
  arr.push(input[i]);
}

function recursion(s, l, r, cnt) {
  cnt++;
  if (l >= r) return [1, cnt];
  else if (s[l] != s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt);
}

function isPalindrome(s) {
  let cnt = 0; 
  return recursion(s, 0, s.length - 1, cnt).join(' ');
}

for (let i = 0; i < arr.length; i++) {
  console.log(isPalindrome(arr[i]));
}