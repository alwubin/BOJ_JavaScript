let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numOfS = [];
let sInfo = [];
let t = Number(input.shift()); //테스트 케이스 개수 
let result = '';

function compare(a,b) {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else return 0;
}

for (let i = 0; i < input.length; i++) {
  if (input[i].length == 1) numOfS.push(Number(input[i]));
  else sInfo.push(input[i]);
}

for (i = 0; i < numOfS.length; i++) {
  let N = numOfS[i]; //참가한 학교 수 
  let arr = [];
  for (j = 0; j < N; j++) {
    let school = sInfo[0].split(' ')[0];
    let drunk = Number(sInfo[0].split(' ')[1]);
    arr.push([school, drunk]);
    sInfo.shift();
  }
  arr.sort(compare);
  result += arr[0][0] + '\n';
}
console.log(result.slice(0,-1));