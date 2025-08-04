function solution(num, k) {
    var answer = 0;
    const n = num.toString().split('')
    n.forEach((i, idx) => {
        Number(i) === k && answer === 0 ? answer = idx + 1 : null
    })
    answer === 0 ? answer = -1 : null
    return answer;
}