function solution(rsp) {
    var answer = '';
    const r = rsp.split('');
    r.forEach((s) => {
        s === '2' ? answer += '0' : (s === '0' ? answer += '5' : answer += '2')
    })
    return answer;
}