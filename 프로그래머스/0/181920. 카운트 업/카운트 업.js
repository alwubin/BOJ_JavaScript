function solution(start_num, end_num) {
    var answer = [];
    let cnt = end_num - start_num + 1;
    
    for (let i = start_num; i < start_num + cnt; i++) {
        answer.push(i);
    }
    return answer;
}