let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


for (let i = 0; i < input.length-1; i++) {
    let data = input[i].split(' ').map(Number);
    let a = data[0];
    let b = data[1];
    let c = data[2];
    
    if(a != 0 && b != 0 && c != 0) { //0 0 0이 들어와도 정삼각형을 출력하기 때문에 
        let longest = data.reduce((a,b) => Math.max(a,b)) // 가장 긴 변 
        let sum = a+b+c-longest; //나머지 두 변의 합
    
        let setData = new Set([a,b,c]);
    
        if (sum > longest) {
            if (setData.size == 1) console.log('Equilateral'); //세 변의 길이가 같을 때 
            else if (setData.size == 2) console.log('Isosceles'); //두 변의 길이가 같을 때
            else console.log('Scalene'); // 세 변의 길이가 모두 다를 때 
        }
        else console.log('Invalid'); //삼각형 조건이 성립하지 않음
    }
}