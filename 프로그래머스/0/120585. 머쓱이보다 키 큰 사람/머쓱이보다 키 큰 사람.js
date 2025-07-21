function solution(array, height) {
    var answer = 0;
    array.forEach((a) => a > height ? answer++ : null)
    return answer;
}