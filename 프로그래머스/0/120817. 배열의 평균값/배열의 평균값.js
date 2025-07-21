function solution(numbers) {
    let sum = 0
    numbers.map((n) => {
        sum += n
    })
    return sum / numbers.length;
}