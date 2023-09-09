let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    if(x+y===0) break;
    else console.log(x+y);
}