let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); //각 원소 인덱스 별 방문 여부
let selected = []; //현재 순열에 포함된 원소

let answer = '';
function dfs(arr, depth, start) {
	if (depth == m) { //모든 순열을 확인하는 부분
		let result = []; //순열 결과 저장 테이블
		for (let i of selected) result.push(arr[i]);
		for (let x of result) answer += x +' '; //계산된 순열을 실질적으로 처리하는 부분
		answer += '\n';
		return;
	}
  for (let i = start; i < arr.length; i++) { //start 지점부터 원소를 하나씩 인덱스 원소를 확인
    if (visited[i]) continue;
    selected.push(i); 
    visited[i] = true;
    dfs(arr, depth+1, i+1); //조합이므로 재귀함수 사용시 다음 인덱스 넣기 
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0, 0);
console.log(answer);