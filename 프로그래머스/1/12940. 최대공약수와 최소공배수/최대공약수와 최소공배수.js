function solution(n, m) {
    let maxDivisor;

    for (let i = 1; i <= Math.min(n,m); i++) {
        if (Math.max(m,n) % i === 0 && Math.min(m,n) % i === 0) {
            maxDivisor = i;
        }
    }

    const answer = [maxDivisor, n * m / maxDivisor];
    return answer;
}