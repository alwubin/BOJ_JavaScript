function solution(a, d, included) {
    var answer = 0;
    
    included.forEach((bool, idx) => {
        let value = a + idx * d;
        if (bool) answer += value;
    })
    
    return answer;
}