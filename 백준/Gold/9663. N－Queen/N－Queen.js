let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let queens = [];

function possible(x,y) {
    for (let [a,b] of queens) {
        if (a == x || b == y) return false; //행이나 열이 같으면 놓을 수 없음
        if (Math.abs(a-x) == Math.abs(b-y)) return false; //이전 퀸의 대각선에 위치하면 놓을 수 없음
    }
    return true;
}

let cnt = 0;
function dfs(row) {
    if (row == n) cnt += 1; //퀸을 n개 배치할 수 있는 경우 카운트 
    for (let i = 0; i < n; i++) { //현재 행에 존재하는 열을 하나씩 확인
        if (!possible(row, i)) continue; //현재 위치에 놓을 수 없다면 무시
        queens.push([row,i]); //현재 위치에 퀸 놓기 
        dfs(row+1); //재귀 함수 호출
        queens.pop(); //현재 위치에서 퀸을 제거하기
    }
}
dfs(0);
console.log(cnt);