function solution(my_string, num1, num2) {
    var answer = '';
    const ms = my_string.split('');
    ms.forEach((s, i) => {
        if (i === num1) answer += ms[num2]
        else if (i === num2) answer += ms[num1]
        else answer += s
    })
    return answer;
}