function solution(code) {
    let ret = '';
    let empty = 'EMPTY';
    let mode = 0;
    let array = code.split('');
    
    array.forEach((v, idx) => {
        if (mode == 0) {
            if (v === '1') mode = 1;
            else if (idx % 2 === 0) ret += v;
        }
        else {
            if (v === '1') mode = 0;
            else if (idx % 2 !== 0) ret += v;
        }
    })
    
    if (ret.length > 0) return ret;
    return empty;
}