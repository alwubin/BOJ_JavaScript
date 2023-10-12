function solution(t, p) {
    let arr = [];
    let cnt = 0;

    for (let i = 0; i < t.length; i++){
        let num = t.slice(i, i+p.length);
        if (num.length == p.length) arr.push(Number(num));
    }

    arr.forEach((x) => {
        if (x  <= Number(p)) cnt++;
    })
    return cnt;
}