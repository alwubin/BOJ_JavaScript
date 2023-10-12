function solution(s) {
    let map = new Map();
    let arr = [];

    s = s.split('');
    s.map((v, idx) => {
        if (!map.has(v)) {
            map.set(v, idx);
            arr.push(-1);
        }
        else {
            arr.push(idx - map.get(v));
            map.set(v, idx);
        }
    })
    return arr;
}