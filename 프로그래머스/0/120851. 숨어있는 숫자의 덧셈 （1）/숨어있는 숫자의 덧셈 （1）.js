function solution(my_string) {
    var answer = 0;
    const ms = my_string.split('')
    ms.forEach((m) => {
       isNaN(parseInt(m)) ? null : answer += parseInt(m)
    })
    return answer;
}