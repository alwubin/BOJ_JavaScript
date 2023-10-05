let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let testCase = Number(input.shift());
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(startX, startY) {
	const queue = [[startX, startY]];
	while (queue.length) {
		const [x, y] = queue.shift(); 
		if (!arr[x][y]) continue;
		else arr[x][y] = 0;

		for (let i = 0; i < 4; i++) {
			let nx = x + dx[i];
			let ny = y + dy[i];
			if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
			if (arr[nx][ny]) queue.push([nx, ny]);
		}
	}
}

for (let t = 0; t < testCase; t++) {
	let cnt = 0;
	var [m, n, k] = input.shift().split(' ').map(Number);
	var arr = Array.from(Array(m), () => new Array(n).fill(0));
	for (let i = 0; i < k; i++) {
		let z = input.shift().split(' ').map(Number);
		arr[z[0]][z[1]] = 1;
	}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j]) {
				dfs(i, j);
				cnt++;
			}
		}
	}
	console.log(cnt);
}