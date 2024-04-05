let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(V, E, List) {
  const parent = Array.from(new Array(V + 1), (_, idx) => idx);

  //간선의 크기순으로 오름차순으로 정렬
  List.sort((a, b) => a[2] - b[2]);
  
  let result = 0;
  
  //MST의 간선 개수는 정점-1개
  let edges = V - 1;

  //트리 루트 노트 찾기
  function getParent(v) {
    if (parent[v] === v) return v;
    return (parent[v] = getParent(parent[v]));
  }

  //루트 노드 합치기
  function unionParent(v1, v2) {
    v1 = getParent(v1);
    v2 = getParent(v2);
    if (v1 < v2) parent[v2] = v1;
    else parent[v1] = v2;
  }

  
  //루트 노드 찾기
  function findParent(v1, v2) {
    const p1 = getParent(v1);
    const p2 = getParent(v2);
    return p1 === p2;
  }

  for (let i = 0; i < E; i++) {
    const [v1, v2, c] = List[i];
    
    //두 정점이 다른 그래프에 속해 있으면 
    //루트 노드를 합쳐줌
    if (!findParent(v1, v2)) {
      result += c;
      edges--;
      unionParent(v1, v2);
      if (!edges) break;
    }
  }

  return result;
}

const arr = n.split(' ').map(Number);
const answer = solution(
  arr[0],
  arr[1],
  input.map((r) => r.split(' ').map(Number)),
);

console.log(answer);
