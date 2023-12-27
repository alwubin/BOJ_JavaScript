function solution(numbers) {
    let answer = Array(numbers.length).fill(-1);
    let stack = [];
    
    numbers.map((number, idx) => {
        while(stack.length !== 0 && numbers[stack[stack.length - 1]] < number) {
            const top = stack.pop();
            answer[top] = number;
        }
        stack.push(idx);
    })
    
    return answer;
}