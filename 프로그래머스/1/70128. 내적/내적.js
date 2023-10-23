function solution(a, b) {
    let sum = 0;
    a.map((v,idx) => {
        sum += v*b[idx];
    })
    return sum;
}