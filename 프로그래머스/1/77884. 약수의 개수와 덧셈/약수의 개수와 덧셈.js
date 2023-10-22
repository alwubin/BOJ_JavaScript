function solution(left, right) {
    let ans = 0;
    let arr = Array(right-left+1).fill().map((v,i) => i+left);

    function divider(num) {
        const division = Array(num).fill().map((v,i) => i+1);
        let cnt = 0;
        division.map((n) => num%n === 0 ? cnt++ : null);
        { cnt % 2 == 0 ? ans += num : ans -= num }
    }
    arr.map((n) => divider(n));
    
    return ans;
}