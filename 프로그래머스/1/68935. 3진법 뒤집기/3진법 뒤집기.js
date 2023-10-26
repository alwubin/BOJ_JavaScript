function solution(n) {
    let result = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return result;
}