function solution(num_list) {
    var answer = [0, 0];
    num_list.map((n) => n % 2 === 0 ? answer[0] += 1 : answer[1] += 1 )
    return answer;
}