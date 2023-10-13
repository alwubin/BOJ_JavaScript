function solution(a, b, n) {
    let left = parseInt(n/a)*b + n%a;
    let ans = parseInt(n/a)*b;
    for (let i = 1; i < n; i++) {
        if (parseInt(left/a) > 0) {
            ans += parseInt(left/a)*b;
            left = parseInt(left/a)*b + left%a;
        }
        else break;
    }
    return ans;
    
}