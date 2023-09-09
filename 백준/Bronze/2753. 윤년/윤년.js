let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let x = Number(input[0]);

if ((x%4==0) && (x%100!=0)) console.log(1);
else if((x%4==0) && (x%400==0)) console.log(1);
else console.log(0);