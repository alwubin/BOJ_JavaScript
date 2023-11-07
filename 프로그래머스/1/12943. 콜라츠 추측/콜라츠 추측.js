function solution(num) {
    let cnt = 0;
    if (num === 1) return 0;
    else {
        while (num > 1) {
            if (cnt > 500) break;
            num % 2 === 0 ? num = parseInt(num / 2) : num = num * 3 + 1;
            cnt++;
        }
    }

    if (cnt > 500) return -1;
    else return cnt;
}