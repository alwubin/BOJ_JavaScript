let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let word = input[i];
    console.log(word);
}