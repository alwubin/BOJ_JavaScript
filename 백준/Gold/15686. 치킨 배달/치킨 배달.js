let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


function dfs(depth, start) {
  if (depth == m) { //각 조합을 확인하는 부분
    let result = []; //조합 결과 저장 테이블
    for (let i of selected) result.push(chicken[i]);
    let sum = 0; //치킨 거리의 합
    for (let [hx, hy] of house) { //모든 집에 대하여
      let temp = 1e9;
      for (let [cx, cy] of result) { //가장 가까운 치킨 집 찾기
        temp = Math.min(temp, Math.abs(hx-cx)+Math.abs(hy-cy));
      }
      sum += temp; //각 집마다 치킨 거리 더하기
    }
    answer = Math.min(answer, sum); //최솟값 계산
    return;
  }
  //start 지점부터 하나씩 원소 인덱스를 확인하며
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue; //중복 허용하지 않음
    selected.push(i);
    visited[i] = true;
    dfs(depth+1, i+1); //조합이므로 재귀함수 호출시 다음 인덱스 넣기
    selected.pop();
    visited[i]= false;
  }
}

let [n,m] = input[0].split(' ').map(Number);
let chicken = []; //전체 치킨집 위치
let house = []; //전체 집 위치
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number); //전체 도시 정보 입력받기
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]); //집
    if (line[j] == 2) chicken.push([i, j]); //치킨집
  }
}

let visited = new Array(chicken.length).fill(false);
let selected = [];

let answer = 1e9;
dfs(0, 0);
console.log(answer);
