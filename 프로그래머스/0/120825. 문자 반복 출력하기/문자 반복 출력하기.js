function solution(my_string, n) {
    var answer = '';
    const str = my_string.split('') 
    str.forEach((s) => {
        answer += s.repeat(n)
    })
    return answer;
}