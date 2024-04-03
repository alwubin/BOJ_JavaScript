let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(input) {
  let [n, m] = input.shift().split(' ').map(Number); //n명의 학생 수, m개의 키를 비교한 회수    
  let indegrees = Array.from({ length: n + 1 }, () => 0);
  let relations = Array.from({ length: n + 1 }, () => []);

  for (row of input) {
    let [a, b] = row.split(' ').map(Number);
    indegrees[b]++;
    relations[a].push(b);
  }

  let answer = [];
  let queue = [];

  for (let i = 1; i <= n; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
      indegrees[i] = -1;
    }
  }

  while (queue.length) {
    let now = queue.shift();
    answer.push(now);

    for (other of relations[now]) {
      indegrees[other]--;

      if (indegrees[other] === 0) {
        queue.push(other);
        indegrees[other] = -1;
      }
    }
  }

  console.log(answer.join(' ')); //결과 출력
}

solution(input);