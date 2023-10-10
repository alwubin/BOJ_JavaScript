function solution(n, s) {
    let ans = [];
    let qu = parseInt(s/n); //몫
    let re = s%n;
    
    if (qu == 0) ans.push(-1);
    else {
        for (let i = 0; i < n-re; i++) {
            ans.push(qu);
        }
        for (let i = 0; i < re; i++) {
            ans.push(qu+1);
        }
    }
    return ans;
}