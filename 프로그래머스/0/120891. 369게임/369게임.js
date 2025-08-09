function solution(order) {
    var answer = 0;
    const or = order.toString().split('')
    or.forEach((o) => {
        if (o === '3' || o === '6' || o ==='9') answer++
    })
    return answer;
}