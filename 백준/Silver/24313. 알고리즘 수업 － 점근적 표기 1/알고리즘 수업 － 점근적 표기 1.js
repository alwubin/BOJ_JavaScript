let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a1 = Number(input[0].split(' ')[0]);
let aO = Number(input[0].split(' ')[1]);
let c = Number(input[1]);
let nO = Number(input[2]);

let fN = a1*nO + aO;
let gN = c*nO;

if (a1 > c) console.log(0); //a1*n+aO <= c*n이 무조건적으로 성립해야하기 때문에 
else {
    if (fN <= gN) console.log(1); //정의 만족할 시
    else console.log(0); //아닐 시
}