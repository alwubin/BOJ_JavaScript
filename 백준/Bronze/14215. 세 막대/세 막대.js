let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);
let a = data[0];
let b = data[1];
let c = data[2];
if (a>=1 && a<=100 && b>=1 && b<=100 && c>=1 && c<=100) {
    let longest = data.reduce((a,b) => Math.max(a,b)) // 가장 긴 변 
    let sum = a+b+c-longest; //나머지 두 변의 합

    if (a==b && b==c) console.log(a+b+c); //정삼각형 
    else if (sum == longest) console.log(a+b+c-1); // 가장 긴 변 길이 == 나머지 두 변의 길이 합
    else if (sum < longest) { //가장 긴 변 길이 > 나머지 두 변의 길이 합
      longest = longest - (longest - sum + 1); 
      sum += longest; //총 둘레 
      console.log(sum);
    }
    else console.log(a+b+c);
}