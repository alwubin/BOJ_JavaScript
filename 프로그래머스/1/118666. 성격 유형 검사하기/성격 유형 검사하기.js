function solution(survey, choices) {
    const score = [3,2,1,0,1,2,3];
    let map = new Map([['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]]);
    let result = '';
    let caseArr = [];
    let scoreArr = [];

    survey.map((type, idx) => {
        const [a,b] = type.split('');
        const grade = choices[idx];
        let val = 0;

        if (grade < 4) {
            val += map.get(a) + score[grade-1];
            map.set(a, val);
        }
        if (grade > 4) {
            val += map.get(b) + score[grade-1];
            map.set(b, val);
        }
    })
    
    map.forEach((v, k) => {
        caseArr.push(k);
        scoreArr.push(v);
    })
    for (let i = 0; i < 8; i+=2) {
        if (scoreArr[i] >= scoreArr[i+1]) result += caseArr[i];
        else result += caseArr[i+1];
    }
    return result;
}