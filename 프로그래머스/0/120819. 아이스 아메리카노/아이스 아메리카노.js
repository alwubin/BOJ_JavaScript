function solution(money) {
    // const m = Number(money.split(',').join(''))
    var answer = [];
    answer.push(parseInt(money / 5500))
    answer.push(money % 5500)
    return answer;
}