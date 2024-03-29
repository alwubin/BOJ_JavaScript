function solution(num_list) {
    
    let odd = 0;
    let even = 0;
    
    num_list.forEach((num, idx) => {
        if (idx % 2 === 0) odd += num;
        else even += num;
    })
    
    let answer = Math.max(odd, even);
    
    return answer;
}