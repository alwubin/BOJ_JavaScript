function solution(numbers) {
    let selected = [];
    let visited = new Array(numbers.length).fill(false);
    let answer = new Set();

    function dfs(numbers, depth) {
        if (depth == 2) {
            let result = [];
            for (let i of selected) result.push(numbers[i]);
            let sum = 0;
            for (let x of result) sum += x;
            answer.add(sum);
            return;
        } 
        for (let i = 0; i < numbers.length; i++) {
            if (visited[i]) continue;
            selected.push(i);
            visited[i] = true;
            dfs(numbers, depth + 1);
            visited[i] = false;
            selected.pop();
        }
    }

    dfs(numbers, 0);
    answer = Array.from(answer).sort((a,b) => a - b);
    return answer;
}