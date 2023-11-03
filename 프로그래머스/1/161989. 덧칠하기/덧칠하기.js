function solution(n, m, section) {
    let maxLen = -Infinity; 
    let cnt = 0;
    section.forEach((v) => {
        if (maxLen < v) {
            cnt++;
            maxLen = v + m - 1;
        }
    })
    
    return cnt;
}