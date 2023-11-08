function solution(s, skip, index) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    [...skip].forEach((v) => {
        alphabet = alphabet.replace(v, '');
    });

    s.split('').forEach((v) => {
        answer += alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
    });
    
    return answer;
}