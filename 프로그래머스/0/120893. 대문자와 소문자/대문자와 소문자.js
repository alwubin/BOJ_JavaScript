function solution(my_string) {
    var answer = '';
    my_string = my_string.split('')
    my_string.forEach((s) => s === s.toLowerCase() ? answer += s.toUpperCase() : answer += s.toLowerCase())
    return answer;
}