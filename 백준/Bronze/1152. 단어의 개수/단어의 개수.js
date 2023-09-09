let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let words = input[0].split(' ');

if (words == '') console.log(0);
else console.log(words.length);