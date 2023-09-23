let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let burger = [];
let drink = [];

for (let i = 0; i < 3; i++) {
  burger.push(Number(input[i]));
}
burger.sort((a,b) => a - b);

for (let i = 3; i <5; i++) {
  drink.push(Number(input[i]));
}
drink.sort((a,b) => a - b);

console.log(burger[0] + drink[0] - 50);