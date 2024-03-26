let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let paper = [];
for (let i = 1; i <= n; i++) {
    paper.push(input[i].split(' ').map(Number));
}

function solution (paper, n) {
    let white = 0;
    let blue = 0;
    function divide (x, y, l) {
        let cnt = 0;
        for (let i = x; i < x + l; i++) {
            for (let j = y; j < y + l; j++) {
                //모든 면을 순회하면서 파란색 종이면 카운트
                if (paper[i][j]) cnt++;
            }
        }

        if (!cnt) {
            //아예 없으면 흰종이 카운트
            white++;
        } else if (cnt === l * l) {
            //
            blue++;
        } else {
            divide(x, y, l/2);
            divide(x, y + l/2, l/2);
            divide(x + l/2, y, l/2);
            divide(x + l/2, y + l/2, l/2);
        }
    }

    divide(0, 0, n);
    console.log(white);
    console.log(blue);
}

solution(paper, n);