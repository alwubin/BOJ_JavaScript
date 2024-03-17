let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let [songs, avg] = input;
let n;

if (avg < 100) {
    n = (avg - 1) * songs + 1;
} else {
    n = avg * songs;
}

console.log(n);