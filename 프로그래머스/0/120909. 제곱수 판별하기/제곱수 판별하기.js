function solution(n) {
    const m = Math.sqrt(n);
    var answer = m === parseInt(m) ? 1 : 2
    return answer;
}