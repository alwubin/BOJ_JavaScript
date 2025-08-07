function solution(numbers, direction) {
    var answer = [];
    numbers.forEach((n, idx) => {
        if (direction === 'right') {
            idx === numbers.length - 1 ? answer[0] = n : answer[idx+1] = n
        }
        else {
            idx === 0 ? answer[numbers.length - 1] = n : answer[idx-1] = n
        }
    })
    return answer;
}