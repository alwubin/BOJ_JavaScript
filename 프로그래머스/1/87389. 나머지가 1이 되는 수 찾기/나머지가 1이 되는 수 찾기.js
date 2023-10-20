function solution(n) {
    let ans = 0;

    for (let i = 2; i < n; i++) {
        if (n%i == 1) { 
            ans = i;
            break;
        }
    }
    return ans;
}