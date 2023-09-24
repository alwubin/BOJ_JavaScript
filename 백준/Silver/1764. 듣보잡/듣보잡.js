let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let lookMap = new Map();
let hearMap = new Map();

for (let i = 1; i <= n; i++) {
  lookMap.set(input[i], 'look');
}
for (let i = n+1; i <= n+m; i++) {
  hearMap.set(input[i], 'hear');
}
let lookHear = [];
if (n > m) {
  hearMap.forEach((v,k) => {
    if (lookMap.has(k) == true) lookHear.push(k);
  });
}
else {
  lookMap.forEach((v,k) => {
    if (hearMap.has(k) == true) lookHear.push(k);
  });
}

lookHear.sort();
console.log(lookHear.length);
console.log(lookHear.join('\n'));