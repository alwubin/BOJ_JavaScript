let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(x, graph, visited, finished, result) {
    visited[x] = true; //현재 노드 방문 처리 
    let y = graph[x];
    if (!visited[y]) { //다음 노드가 미방문 상태
        dfs(y, graph, visited, finished, result);
    }
    else if (!finished[y]) { //다음 노드가 방문후 완료 전 상태
        while (y != x) { //사이클 발생 == 정수 뽑힙
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true; //해당 노드 완료 처리 
}

let n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) graph.push(Number(input[i]));
let visited = new Array(n+1).fill(false);
let finished = new Array(n+1).fill(false);
let result = []; //결과 값 배열 

for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
}

console.log(result.length);
console.log(result.sort((a,b) => a-b).join('\n'));