let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let sum = a+b+c;

if (a==b && b==c) console.log('Equilateral');
else if (sum == 180 && a==b) console.log('Isosceles');
else if (sum == 180 && a==c) console.log('Isosceles');
else if (sum == 180 && b==c) console.log('Isosceles');
else if (sum == 180 && a!=b && b!=c) console.log('Scalene');
else console.log('Error');