function solution(numbers) {
    let arr = [...new Array(10)].map((_, i) => i);

    let result = 0;
    arr.forEach((num) => {
        if (!numbers.includes(num)) result += num;
    })
    
    return result;
}