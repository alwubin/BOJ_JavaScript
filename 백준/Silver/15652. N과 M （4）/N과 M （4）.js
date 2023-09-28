let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr = []; //중복 조합을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let selected = []; //현재 중복 조합에 포함된 원소

let answer = '';
function dfs(arr, depth, start) {
    if (depth == m) { //깊이가 m이 되었을 때 모든 중복 조합을 확인하는 부분
        let result = []; //중복 조합 결과 저장 테이블
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' ';
        answer += '\n';
        return;
    }
    for (let i = start; i < arr.length; i++) { //이전에 골랐던 start 지점부터 하나씩 원소 인덱스를 확인하며
        selected.push(i); //현재 원소 선택 (현재보다 작은 수를 골라 넣기 방지)
        dfs(arr, depth+1, i); //조합이므로 재귀함수 호출시 다음 인덱스를 넣기 
        selected.pop(); //현재 원소 선택 취소
    }
}
dfs(arr, 0, 0);
console.log(answer);