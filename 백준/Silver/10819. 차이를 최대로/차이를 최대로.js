let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(depth) {
    if (depth == n) {
        let cur = 0;
        for (let i = 0; i < n-1; i++) cur += Math.abs(result[i] - result[i+1]);
        maxVal = Math.max(maxVal, cur);
    }
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(arr[i]);
        dfs(depth+1);
        visited[i] = false;
        result.pop();
    }
}

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let visited = new Array(n).fill(false);
let result = [];
let maxVal = -1e9;

dfs(0);
console.log(maxVal);
