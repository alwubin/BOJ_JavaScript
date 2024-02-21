let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);
let answer = 0;
data.forEach((num) => {
    answer += num**2;
})
console.log(answer%10);