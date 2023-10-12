function solution(keymap, targets) {
    let map = new Map();
    let ans = [];

    keymap.forEach((key) => {
        key = key.split('');
        key.map((v, idx) => {
            if (map.has(v)) {
                let exIdx = map.get(v);
                let minIdx = Math.min(exIdx, idx+1);
                map.set(v, minIdx);
            }
            else map.set(v, idx+1);
        })
    })

    targets.forEach((target) => {
        target = target.split('');
        let sum = 0;
        let isSearch = true;
        target.forEach((t) => {
            if (map.has(t)) {
                sum += map.get(t);
            }
            else isSearch = false;
        })
        if (isSearch) ans.push(sum);
        else ans.push(-1);
    })
    
    return ans;
}