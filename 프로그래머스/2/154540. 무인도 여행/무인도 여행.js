function solution(maps) {
    function dfs(x, y) {
        if (x <= -1 || x >= maps.length || y <= -1 || y >= String(maps[0]).length) return 0;
        if (arr[x][y] >= 1) {
            let result = 0;
            result += arr[x][y];
            arr[x][y] = 0;
            result += dfs(x-1, y);
            result += dfs(x, y-1);
            result += dfs(x+1, y);
            result += dfs(x, y+1);
            return result;
	    }
	    return 0;
    }
    
    let arr = [];
    for (let i = 0; i < maps.length; i++) {
      var land = String(maps[i]);
      var rpX = /X/g;
      var reland = land.replace(rpX, '0');
      arr.push(reland.split('').map(Number));
    }

    let answer = [];
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < String(maps[0]).length; j++) {
            let current = dfs(i, j);
            if (current > 0) answer.push(current);
        }
    }
    if (answer.length == 0) {
        answer.push(-1);
        return answer;
    }
    else
        return answer.sort((a,b) => a-b);

}