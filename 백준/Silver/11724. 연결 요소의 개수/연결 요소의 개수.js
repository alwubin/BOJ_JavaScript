let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
let visited = new Map();
let graph = new Array(n+1);
let cnt = 0;

for (let i = 0; i < n+1; i++) {
    graph[i] = [];
}

for (let i = 0; i < m; i++) {
    let [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}
    
graph.forEach((arr) => {
    arr.sort((a,b) => a - b);
});

for (let i = 1; i < n+1; i++) {
    if (!visited.has(i)) {
        dfs(i);
        cnt++;
    }
}

function dfs(start) {
    visited.set(start, true);
    
    for (let i = 0; i < graph[start].length; i++) {
        let param = graph[start][i];
        if (!visited.get(param)) dfs(param);
    }
}

console.log(cnt);