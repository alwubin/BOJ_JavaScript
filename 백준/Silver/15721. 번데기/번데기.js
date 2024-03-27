let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let A = Number(input[0]); //게임 인원
let T = Number(input[1]); //구하고자 하는 번째 
let S = Number(input[2]); //구호 : 뻔 0 데기 1 

function solution (A, T, S) {
    let n = 0;
    let cnt = 0;
    let answer = 0;

    while(true) {
        n++;
        const game = [0, 1, 0, 1]; //처음 뻔-데기 뻔-데기는 동일하므로 넣고 시작
        //n 회차 문장엔 n+1만큼 반복
        for (let i = 0; i < n + 1; i++) game.push(0); 
        for (let i = 0; i < n + 1; i++) game.push(1);

        for (const x of game) {
            if (x === S) cnt++;
            if (cnt === T) {
                console.log(answer);
                return;
            }

            answer++;
            answer %= A;
        }
    }
}

solution(A, T, S);