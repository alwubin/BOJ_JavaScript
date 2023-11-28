function solution(strings, n) {
    let arr = [];
    strings.forEach((word,idx) => {
        arr.push([word[n],idx]);
    })

    function compare(a,b) {
        if (a[0] < b[0]) return -1;
        if (a[0] === b[0]) {
            if (strings[a[1]] < strings[b[1]]) return -1;
            if (strings[a[1]] > strings[b[1]]) return 1;
        }
        if (a[0] > b[0]) return 1;
    }
    arr.sort(compare);

    let answer = [];
    arr.forEach((v) => {
        const idx = v[1];
        answer.push(strings[idx]);
    })
    return answer;
}