function solution(number) {
    let visited = new Array(number.length).fill(false);
    let selected = [];
    let cnt = 0;
    
    function dfs(arr, depth, start) {
        if (depth == 3) {
            let sum = 0;
            for (let i of selected) sum += i;
            if (sum == 0) cnt++;
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if (visited[i]) continue;
            selected.push(arr[i]);
            visited[i] = true;
            dfs(arr, depth+1, i+1);
            selected.pop();
            visited[i] = false;
        }
    }
    
    dfs(number, 0, 0);
    return cnt;
}