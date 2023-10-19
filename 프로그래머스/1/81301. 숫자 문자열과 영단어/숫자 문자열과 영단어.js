function solution(s) {
    let result = '';
    let str = '';
    let map = new Map([['zero', '0'], ['one', '1'], ['two', '2'], ['three', '3'], ['four', '4'], ['five', '5'], ['six', '6'], ['seven', '7'], ['eight', '8'], ['nine', '9']]);
    
    [...s].forEach((v) => {
        if (Number(v) > -1) result += v;
        else {
            str += v;
            if (map.has(str)) {
                result += map.get(str);
                str = '';
            }
        }
    })
    
    return Number(result);
}