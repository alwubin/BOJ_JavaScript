let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m, v] = input.shift().split(' ').map(Number);

//그래프 값 저장
let graph = new Array(n+1);
for (let i = 0; i < graph.length; i++) {
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

//dfs 
function dfs(graph, startNode) {
    const visited = [];
    let needVisit = [];
    
    needVisit.push(startNode);
    
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
}
let answerDfs = dfs(graph, v);
console.log(answerDfs.join(' '));

//bfs
function bfs(graph, v) {
  //각 노드가 방문된 정보를 표현 
  let visited = [];
  //탐색이 필요한 노드
  let needVisit = []; 

  //노드 탐색 시작 
  needVisit.push(v);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
          visited.push(node);
          needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
}
let answerBfs = bfs(graph, v);
console.log(answerBfs.join(' '));