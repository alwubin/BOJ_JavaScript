function solution(lottos, win_nums) {
    let zero = 0;
    let correct = 0;
    lottos.map((v,i) => {
        win_nums.includes(v) ? correct++ : null;
        v === 0 ? zero++ : null;
    });

    let ans = [];
    function Rate(n) {
        switch(n) {
            case 6:
                ans.push(1);
                break;
            case 5:
                ans.push(2);
                break;
            case 4:
                ans.push(3);
                break;
            case 3:
                ans.push(4);
                break;
            case 2:
                ans.push(5);
                break;
            default:
                ans.push(6);
                break;
        }
    }

    Rate(correct+zero);
    Rate(correct);
    return ans;
}