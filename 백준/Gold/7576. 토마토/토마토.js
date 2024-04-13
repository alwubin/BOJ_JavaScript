let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [m, n] = input.shift().split(' ').map(Number);
let graph = input.map(v => v.split(' ').map(Number));
const dx=[1, 0, -1, 0];
const dy=[0, 1, 0, -1];


function solution(graph) {
  let queue = []; //익은 토마토의 좌표를 저장할 큐를 빈 배열로 초기화 
  let dist = [...Array(n)].map(() => Array(m).fill(0)); //익은 토마토의 거리를 저장할 배열 초기화

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //익은 토마토일 때 큐에 넣어 주변 익지않은 토마토 검색 
      if (graph[i][j] === 1) {
        queue.push([i, j]);
      }
      //익지 않은 토마토일 때
      if (graph[i][j] === 0) {
        dist[i][j] = -1;
      }
    }
  }

  let head = 0;
  //큐에는 익은 토마토의 위치만 있음
  while (queue.length > head) {
    const [x, y] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      //인접한 원소가 익은 토마토 또는 빈칸일 시 
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (dist[nx][ny] >= 0) {
        continue;
      }
      //방문하지 않은 안익은 토마토이므로 참조하는 큐에서 거리 +1하고 큐에 추가하기
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  //토마토가 익을 때까지의 최소 날짜
  let day = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //안익은 토마토가 있음
      if (dist[i][j] === -1) {
        return -1;
      }
      day = Math.max(day, dist[i][j]);
    }
  }
  return day;
}
console.log(solution(graph));