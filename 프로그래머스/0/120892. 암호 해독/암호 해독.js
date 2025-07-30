function solution(cipher, code) {
    var answer = '';
    const c = code
    for (; code <= cipher.length; code += c) {
        answer += cipher[code - 1]
    }
    return answer;
}