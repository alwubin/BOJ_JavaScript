let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';

for (let i = 1; i <= n; i++) {
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    result += `Case #${i}: ${x+y}`+'\n';
}
console.log(result);