let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [r, c] = input.shift().split(' ').map(Number);
const graph = input.map((value) => value.split(''));
const alphabet = new Array(26).fill(false);

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let count = 0;

dfs(0, 0, 1);
console.log(count);


function dfs(i, j, cellCnt) {
  alphabet[graph[i][j].charCodeAt() - 65] = true;
  count = Math.max(count, cellCnt);
  for(let d of dir) {
    const [dx, dy] = [i + d[0], j + d[1]];
    if(isValidRange(dx,dy) && !alphabet[graph[dx][dy].charCodeAt() - 65]) {
      dfs(dx, dy, cellCnt + 1);
      alphabet[graph[dx][dy].charCodeAt() - 65] = false;
    }
  }
}

function isValidRange(i, j) {
  if (i < 0 || i >= r || j < 0 || j >= c) return false;
  else return true;
}