function solution(s) {
    let n;
    if (isNaN(s[0])) {
        n = Number(s.slice(1));
        if (s[0] === '-') n = -n;
    }
    else n = Number(s);
    return n;
}