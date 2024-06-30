let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

function solution(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (i < 100) {
            cnt++;
        } else if (i >= 100 && i < 1000) {
            let str = String(i);
            let dif1 = Number(str[1]) - Number(str[0]);
            let dif2 = Number(str[2]) - Number(str[1]);
            
            if (dif1 === dif2) {
                cnt++;
            }
        }
    }
    return cnt;
}

console.log(solution(num));
