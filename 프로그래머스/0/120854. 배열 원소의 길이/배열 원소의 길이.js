function solution(strlist) {
    var answer = [];
    strlist.forEach((s) => {
        answer.push(s.split('').length)
    })
    return answer;
}