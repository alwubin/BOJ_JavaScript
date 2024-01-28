function solution(n, control) {
    var answer = n;
    let arr = control.split('');
    
    arr.forEach((ctl) => {
        if (ctl === 'w') answer += 1;
        else if (ctl === 's') answer -= 1;
        else if (ctl === 'd') answer += 10;
        else if (ctl === 'a') answer -= 10;
    })
    
    return answer;
}