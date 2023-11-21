function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a - b).forEach((v) => {
        if (v <= budget) {
            budget -= v;
            answer += 1;
        }
    })
    return answer;
}