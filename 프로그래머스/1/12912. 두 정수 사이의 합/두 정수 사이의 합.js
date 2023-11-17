function solution(a, b) {
    let sum = 0;
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const n = max - min + 1;
    if (max === min) return min;
    const answer = Array.from({ length : n }, (_, idx) => min + idx).map((v) => sum += v);
    
    return answer[n-1];
}