let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(index, value) {
    if (index == n) {
        minVal = Math.min(minVal, value);
        maxVal = Math.max(maxVal, value);
        return;
    }
    if (add > 0) {
        add--;
        dfs(index+1, value+arr[index]);
        add++;
    }
    if (sub > 0) {
        sub--;
        dfs(index+1, value-arr[index]);
        sub++;
    }
    if (mul > 0) {
        mul--;
        dfs(index+1, value*arr[index]);
        mul++;
    }
    if (div > 0) {
        div--;
        dfs(index+1, ~~(value/arr[index]));
        div++;
    }
}

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let [add, sub, mul, div] = input[2].split(' ').map(Number);
let minVal = 1e9;
let maxVal = -1e9;

dfs(1, arr[0]);

console.log(maxVal);
console.log(minVal);