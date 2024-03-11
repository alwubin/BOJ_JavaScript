function solution(arr, queries) {
    let answer = [];

    queries.forEach((q) => {
        let values = [];
        
        for (let i = q[0]; i <= q[1]; i++) {
            if (arr[i] > q[2]) values.push(arr[i]);
        }
        
        values.sort((a,b) => a - b);
        if (values.length > 0) answer.push(values[0]);
        else answer.push(-1);
    })
    
    return answer;
}