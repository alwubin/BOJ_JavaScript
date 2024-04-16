let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, w, k] = input.shift().split(' ').map(Number);
let graph = Array.from(Array(h), () => Array(w).fill(0));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = Array.from(Array(h), () => Array(w).fill(false));

for (let i = 0; i < k; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

  for (let y = h - y2; y < h - y1; y++) {
    for (let x = x1; x < x2; x++) {
      graph[y][x] = 1;
    }
  }
}

let cnt = 0;
function dfs(x,y) {
  cnt++;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < h && ny >= 0 && ny < w && !graph[nx][ny] &&!visited[nx][ny]) {
      dfs(nx, ny);
    }
  }
}

let answer = [];
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    cnt = 0;
    if (!visited[i][j] && !graph[i][j]) {
      dfs(i, j);
      answer.push(cnt);
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a,b) => a - b).join(' '));