function solution(array, n) {
    var answer = 0;
    array.forEach((a) => a === n ? answer++ : null)
    return answer;
}