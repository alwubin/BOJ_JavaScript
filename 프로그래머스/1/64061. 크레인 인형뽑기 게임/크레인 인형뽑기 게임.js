function solution(board, moves) {
    let arr = [];
    let cnt = 0;
    moves.forEach((v) => {
        for (let i = 0; i < board[0].length; i++) {
            if (board[i][v-1] !== 0) {
                if (arr[arr.length-1] == board[i][v-1]) {
                    cnt += 2;
                    arr.pop();
                }
                else arr.push(board[i][v-1]);
                board[i][v-1] = 0;
                break;
            }
        }
    })
    return cnt;
}