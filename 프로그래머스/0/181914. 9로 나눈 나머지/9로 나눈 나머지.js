function solution(number) {
    var answer = 0;
    let sum = 0;
    let input = number.split('');
    input.forEach((num) => {
        sum += Number(num);
    })
    answer = sum % 9;
    return answer;
}