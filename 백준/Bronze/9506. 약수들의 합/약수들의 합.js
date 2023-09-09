let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = input.length - 1 //입력의 마지막은 -1

for (let i = 0; i < t; i++) { //각 testcase마다 약수 구하기 
  let n = Number(input[i]);
    if(n > 2 && n < 100000) {
        let sum = 0;
        let factor = [];
        for (let j = 1; j < n; j++) 
            if(n%j == 0) factor.push(j); 
        for (let k = 0; k < factor.length; k++) 
            sum += factor[k];
        if(sum == n) console.log(n + ' = ' + factor.join(' + '));
        else console.log(n + ' is NOT perfect.');
    }
}