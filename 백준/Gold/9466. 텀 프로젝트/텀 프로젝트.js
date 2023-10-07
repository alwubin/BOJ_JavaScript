let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs (x, graph, visited, finished, result) {
    visited[x] = true; //현재 노드 방문 처리 
    let y = graph[x]; //현재 노드에 이어진 다음 노드
    if (!visited[y]) { //다음 노드를 아직 방문하지 않았다면
        dfs(y, graph, visited, finished, result);
    }
    else if (!finished[y]) { //다음 노드를 방문한 적이 있지만, 미완료 상태시
        //사이클 발생함 
        while (y != x) { //사이클에 포함된 노드 저장 
             result.push(y);
            y = graph[y]; //반복해서 y가 가리키는 노드로 넘어가므로 사이클에 포함된 노드들을 저장할 수 있음
        }
        result.push(x);
    }
    finished[x] = true; //현재 노드의 처리가 완료됨
}

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
    let n = Number(input[line]);
    let graph = [0, ...input[line+1].split(' ').map(Number)];
    let visited = new Array(n+1).fill(false);
    let finished = new Array(n+1).fill(false);
    let result = [];
    
    for (let x = 1; x <= n; x++) { //1번 노드부터 판단시작 
        if (!visited[x]) dfs(x, graph, visited, finished, result);
    }
    line += 2; //다음 테스트 케이스로 이동
    console.log(n - result.length); //팀이 생성된 노드 제외한 나머지 개수 출력
}