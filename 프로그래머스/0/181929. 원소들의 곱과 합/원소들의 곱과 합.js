function solution(num_list) {
    let sum = 0;
    let mul = 1;
    
    num_list.forEach((num) => {
        sum += num;
        mul *= num;
    })
    
    if (mul < (sum)**2) return 1;
    return 0;
}