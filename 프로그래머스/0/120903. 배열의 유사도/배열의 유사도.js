function solution(s1, s2) {
    var answer = 0;
    s1.forEach((s) => s2.includes(s) ? answer++ : null);
    return answer;
}