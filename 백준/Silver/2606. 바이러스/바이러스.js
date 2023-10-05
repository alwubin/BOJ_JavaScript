let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(x) {
  cnt += 1;
  visited[x] = true; //현재 노드를 방문 처리
  for (i of graph[x]) { //현재 노드와 연결된 다른 노드를 재귀적으로 방문 
    if (!visited[i]) {
      dfs(i);
    }
  }
}

let n = Number(input[0]); //컴퓨터의 수 
let m = Number(input[1]); //연결되어 있는 컴퓨터 쌍의 수 

let graph = Array.from(Array(n+1), () => new Array(0)); //graph[n+1][0] 빈 이차원 배열 생성

for (let i = 2; i <= m+1; i++) { //각 노드마다 자식 노드 값 넣어주기
  let [a,b] = input[i].split(' ').map(Number);
  graph[a].push(b); 
  graph[b].push(a);
}

//각 노드가 방문된 정보를 표현 
let visited = Array(n+1).fill(false);

//웜 바이러스에 걸리게 되는 컴퓨터 수
let cnt = 0;

//DFS 호출
dfs(1);
console.log(cnt-1);