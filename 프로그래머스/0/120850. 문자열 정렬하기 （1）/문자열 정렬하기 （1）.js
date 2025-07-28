function solution(my_string) {
    var answer = [];
    const m = my_string.split('')
    m.forEach((n) => isNaN(n) ? null : answer.push(Number(n)))
    answer = answer.sort((a, b) => a - b)
    return answer;
}