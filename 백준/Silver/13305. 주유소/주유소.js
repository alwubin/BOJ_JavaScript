let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //도시의 개수
let roadLengths = input[1].split(' ').map(Number); //n-1개 
let oilPrices = input[2].split(' ').map(Number); //각 도시의 주유소 가격 
//첫 주유소에서 무조건 다음 도시로 넘어갈때까지의 거리만큼은 충전해야함 
let finalPrice = oilPrices[0]*roadLengths[0]; 
let minPrice = oilPrices[0]; //최소 가격 = 첫 주유소 가격

for (let i = 1; i < n-1; i++) { //최소 가격과 다음 도시 주유소 가격 비교후 충전 금액 계산
    if (oilPrices[i] < minPrice) minPrice = oilPrices[i];
    finalPrice += roadLengths[i]*minPrice;
}
console.log(finalPrice);