let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input.shift().split(' ').map(Number);
const maze = []; //미로
for (let i = 0; i < n; i++) {
    maze.push(input[i].split('').map(Number));
}
const visited = Array.from({length: n}, () => Array(m).fill(false)); //방문처리 배열

function bfs(row, col) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    
    queue.push([row, col]);
    visited[row][col] = true;
    
    while (queue.length) {
        const [x,y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (maze[nx][ny] && !visited[nx][ny]) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

bfs(0,0);
console.log(visited[n-1][m-1]);