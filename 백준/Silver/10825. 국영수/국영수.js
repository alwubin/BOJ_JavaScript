let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
let names = [];

for (let i = 1; i <= n; i++) {
  let name = input[i].split(' ')[0];
  let kor = Number(input[i].split(' ')[1]);
  let eng = Number(input[i].split(' ')[2]);
  let math = Number(input[i].split(' ')[3]);
  arr.push([name, kor, eng, math]);
}

arr.sort((a,b) => {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else {
    if (a[2] < b[2]) return -1;
    else if (a[2] > b[2]) return 1;
    else {
      if (a[3] > b[3]) return -1;
      else if (a[3] < b[3]) return 1;
      else {
        if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        else return 0;
      }
    }
  }
})

arr.forEach(x => names.push(x[0]));
console.log(names.join('\n'));