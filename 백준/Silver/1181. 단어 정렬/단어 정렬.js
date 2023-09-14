let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) { //문자열 집합 만들기 
    arr.push(input[i]);
}

arr = [...new Set(arr)]; //배열로 변경해줌 

arr.sort((a,b) => {
  if (a.length != b.length) return a.length - b.length; //길이가 다르면 짧은 것부터
  else { //길이가 같으면 사전순으로 비교 
    if (a<b) return -1;
    else if (a>b) return 1;
    else return 0;
  }
})

for (let x of arr) {
	console.log(x);
}