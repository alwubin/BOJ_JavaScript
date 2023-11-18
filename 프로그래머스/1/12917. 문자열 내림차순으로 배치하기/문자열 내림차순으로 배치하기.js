function solution(s) {
    let lowerCase = [];
    let upperCase = [];
    s.split('').forEach((v) => {
        if (v === v.toLowerCase()) lowerCase.push(v);
        if (v === v.toUpperCase()) upperCase.push(v);
    })

    function compare(a,b) {
        if (a>b) return -1;
        else if (a<b) return 1;
        else return 0;
    }
    
    return lowerCase.sort(compare).join('') + upperCase.sort(compare).join('');
}