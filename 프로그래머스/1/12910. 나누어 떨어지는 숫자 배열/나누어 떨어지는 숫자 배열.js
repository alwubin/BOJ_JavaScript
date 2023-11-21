function solution(arr, divisor) {
    let answer = [];
    arr.forEach((v) => {
        if (v % divisor === 0) answer.push(v);
    })
    if (answer.length === 0) return [-1];
    return answer.sort((a,b) => a - b);
}