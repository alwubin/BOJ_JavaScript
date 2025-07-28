function solution(box, n) {
    var answer = 1;
    box.forEach((b) => answer *= parseInt(b / n))
    return answer;
}