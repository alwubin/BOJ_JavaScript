function solution(price, money, count) {
    let sum = price;
    let ans
    
    for (let i = 2; i <= count; i++) {
        sum += price*i;
    }
    if ((sum-money) <= 0) return 0;
    else return sum-money;
}