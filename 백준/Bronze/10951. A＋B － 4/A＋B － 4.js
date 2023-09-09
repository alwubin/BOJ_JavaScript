const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const inputCount = input.length;
let i = 0;
while(i < inputCount) {
    let numbers = input[i].split(' ');
    console.log(Number(numbers[0]) + Number(numbers[1]))
    i++;
}