let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

if (n % 2 === 1) {
    console.log('SK');
} else {
    console.log('CY');
}