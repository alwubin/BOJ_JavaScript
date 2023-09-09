let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

// let result = (BigInt(input)* BigInt(input-1)* BigInt(input-2))/ BigInt(6); //1에서 n까지 3개의 수를 뽑는 방법
// console.log(String(result));

let num = BigInt(input[0]); //입력받은 값을 BigInt로 변환 
let sum = 0n; //BigInt로 변환하여 뒤에 n을 붙여서 계산
let getNum = num - 2n; //i가 n-2까지 이므로 

for (let i = 1n; i <= num-1n; i++) {
  sum += getNum * i; //3중 for문 점화식 = (n-2)*1+(n-3)*2+(n-4)*3...+(n-(n-1))*(n-2)
  getNum -= 1n; //점화식에서 i가 ++1될 때마다 (n-2)항은 --1됨
}
console.log(String(sum));
console.log(3); //3중 for문으로 최고차항은 3
