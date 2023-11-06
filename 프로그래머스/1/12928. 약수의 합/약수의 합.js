function solution(n) {
    let sum = 0;
    Array.from({length: n}, (_, idx) => {
        if (n % (idx + 1) == 0) sum += (idx+1);
    })
    return sum;
}