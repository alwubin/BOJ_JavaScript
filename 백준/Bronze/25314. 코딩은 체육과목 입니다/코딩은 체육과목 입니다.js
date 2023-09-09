let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let byte = Number(input[0]);
let n = Number(byte/4);
let result = '';

for (let i = 0; i < n; i++){
    result += 'long ';
}
result += 'int';

console.log(result);