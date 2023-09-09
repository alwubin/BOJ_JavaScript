let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //총 바구니 개수
let m = Number(input[0].split(' ')[1]); //앞으로 바구니에 공을 넣을 횟수

let basket = Array(n).fill(0); //모든 바구니에 아무것도 들어있지 않은 배열 생성;

for (let t = 1; t <= m; t++) {
    let i = Number(input[t].split(' ')[0]); //공 넣기 시작할 첫번째 바구니 번호
    let j = Number(input[t].split(' ')[1]); //공 넣을 마지막 바구니 번호
    let k = Number(input[t].split(' ')[2]); //바구니에 넣을 공 번호
    for(let x = i-1; x <= j-1; x++) {
        basket[x] = k; // 해당되는 바구니에 k번 공 넣기 
    }
}
console.log(basket.join(' '));