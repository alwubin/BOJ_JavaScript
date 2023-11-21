function solution(s) {
    let answer = '';
    s.split(' ').forEach((v) => {
        let word = v.split('');
        word.forEach((c, idx) => {
            if (idx % 2 === 0) answer += c.toUpperCase();
            if (idx % 2 !== 0) answer += c.toLowerCase();
        })
        answer += ' ';
    })
    return answer.slice(0, -1);
}