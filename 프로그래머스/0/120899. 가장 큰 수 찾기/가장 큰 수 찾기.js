function solution(array) {
    let b = 0;
    array.forEach((a) => {
        if (a > b) b = a;
    })
    var answer = [b, array.indexOf(b)];
    return answer;
}