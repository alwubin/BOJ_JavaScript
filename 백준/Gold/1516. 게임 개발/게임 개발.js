let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input.shift());
const testCase = [];
input.map((item) => {
    const temp = item.split(' ').filter(x => x !== '-1');
    testCase.push(temp.map(Number));
});


function solution(n, testCase) {
    let graph = Array.from({length: n + 1}, () => []);
    let indegress = Array(n+1).fill(0); //진입차수
    let times = Array(n+1).fill(0); //각 노드의 건설 시간
    let totalTimes = Array(n+1).fill(0); //총 건설 시간
    let queue = [];

    for (let i = 0; i < testCase.length; i++) {
        times[i+1] = (testCase[i].shift()); //각 노드의 건설 시간 저장
        const to = i + 1;

        for (const from of testCase[i]) {
            graph[from].push(to);
            indegress[to]++; //to 노드로 오는 간선의 개수 저장
        }
    }

    for (let i = 1; i <= n; i++) {
        if (indegress[i] === 0) { //i노드로 오는 간선의 개수가 0이면 
            queue.push(i); //큐에 추가
            totalTimes[i] = times[i]; //시작 노드로 설정
        }
    }

    while (queue.length) {
        const from = queue.shift();

        for (const next of graph[from]) { 
            //from을 꺼낸 후, from으로 부터 이어지는 노드의 간선 개수 -1 
            indegress[next]--;

            if (indegress[next] === 0) queue.push(next); //0이되면 queue에 넣음

            totalTimes[next] = Math.max(totalTimes[next], totalTimes[from] + times[next]);
        }
    }

    totalTimes.shift();
    console.log(totalTimes.join('\n'));
}

solution(n, testCase);