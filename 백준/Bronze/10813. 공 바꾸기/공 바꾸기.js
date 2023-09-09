let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]) //총 바구니 개수
let m = Number(input[0].split(' ')[1]) //공 바꾸는 총 횟수 
let basket = []; //n개의 바구니 1~n번 

for (let i = 0; i < n; i++) {
    basket.push(i+1); //바구니 번호가 1번부터이므로 공 번호도 1번부터 넣어주기
}

for (let t = 1; t <= m; t++) { //각 회차
    let i = Number(input[t].split(' ')[0]); //첫번째 바구니
    let j = Number(input[t].split(' ')[1]); //두번째 바구니
    let temp = basket[i-1]; //i바구니 값 복사해주기 
    basket[i-1] = basket[j-1]; //현재 j바구니 값 i바구니에 넣어주기
    basket[j-1] = temp; //복사해뒀던 i바구니 값 j바구니에 넣어주기
}
console.log(basket.join(' '));