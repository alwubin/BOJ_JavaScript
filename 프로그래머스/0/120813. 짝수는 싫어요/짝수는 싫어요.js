function solution(n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? null : answer.push(i)
    }
    return answer;
}