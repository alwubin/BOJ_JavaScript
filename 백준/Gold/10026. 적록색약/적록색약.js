let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(''));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(x, y) {
	if (!visited[x][y]) {
		visited[x][y] = true;
		for (let i = 0; i < 4; i++) {
			let nx = x + dx[i];
			let ny = y + dy[i];
			if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
			if (graph[x][y] == graph[nx][ny]) dfs(nx, ny); //같은 색상이면 재귀적으로 dfs 호출
		}
		return true; //방문처리 완료 
	}
	return false; //이미 방문한 위치일 시 새로운 연결요소가 없는 것을 나타냄
}

//dfs 이용해서 연결 요소 세기 
let result1 = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (dfs(i, j)) result1++;
	}
}

//r->g 변환 이후 다시 세기
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (graph[i][j] == 'R') graph[i][j] = 'G';
	}
}

let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (dfs(i, j)) result2++;
	}
}

console.log(result1 + ' ' + result2);