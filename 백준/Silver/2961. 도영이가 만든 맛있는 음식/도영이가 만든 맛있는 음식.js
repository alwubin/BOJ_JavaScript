function dfs(depth, start) {
    if (depth >= 1) { //재료가 한 개 이상이면 무조건 계산 가능함
        let totalX = 1; //신맛 (곱)
        let totalY = 0; //쓴맛 (합)
        for (let i of result) { //재료마다 하나씩 확인
            let [x,y] = arr[i]; //배열에 넣은 각 재료의 신맛과 쓴맛
            totalX *= x;
            totalY += y;
        }
        answer = Math.min(answer, Math.abs(totalX - totalY));
    }
    for (let i = start; i < n; i++) {
        if (visited[i]) continue; //중복 제거하기 위해서 방문 처리
        visited[i] = true;
        result.push(i);
        dfs(depth+1, i+1); //재귀함수 호출
        visited[i] = false; //방문처리 해제
        result.pop();
    }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    let [x,y] = input[i].split(' ').map(Number);
    arr.push([x,y]); 
}
let visited = new Array(n).fill(false);
let result = []; //조합 결과 배열
let answer = 1e9;

dfs(0,0);
console.log(answer);