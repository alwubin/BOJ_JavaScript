let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let max = Math.max(a,b); //둘 중 더 큰 숫자
let min = Math.min(a,b);
let arrMax = [];
let arrMin = [];
let arr = []; //공약수 

//약수 구해서 배열에 넣기
for (let i = 1; i <max+1; i++) { 
  if (max % i == 0) arrMax.push(i);
}
for (let i = 1; i < min+1; i++) {
  if (min % i == 0) arrMin.push(i);
}


for (let i = 0; i < arrMin.length; i++) { //최대공약수 구하기
  if (arrMax.indexOf(arrMin[i]) > -1) arr.push(arrMin[i]);
}
arr.sort((x,y) => x-y); //오름차순으로 정렬후 맨 마지막 인덱스가 최대공약수
let commonDivisor = arr[arr.length-1]; //최대공약수 
let commonMultiple = (max * min) / commonDivisor; //최소공배수는 두 수의 곱에서 최대공약수 나눠준 값
console.log(commonDivisor);
console.log(commonMultiple);