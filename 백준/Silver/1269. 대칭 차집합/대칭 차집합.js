let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

Set.prototype.difference = function (set) { //차집합 구하는 함수 
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }
  return result;
};

let [n,m] = input[0].split(' ').map(Number);
let setA = new Set(input[1].split(' ').map(Number));
let setB = new Set(input[2].split(' ').map(Number));

let aDiffB = setA.difference(setB); //A-B
let bDiffA = setB.difference(setA); //B-A
console.log(aDiffB.size + bDiffA.size);