function solution(ineq, eq, n, m) {
    let answer;
    if (ineq === '<' && eq === '=') {
        answer = n <= m;
    } else if (ineq === '<' && eq === '!') {
        answer = n < m;
    } else if (ineq === '>' && eq === '=') {
        answer = n >= m;
    } else {
        answer = n > m;
    }
    if (answer) return 1;
    return 0;
}