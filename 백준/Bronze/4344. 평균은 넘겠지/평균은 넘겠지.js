let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]); //전체 테스트 케이스의 개수

for (let t = 1; t <= testCase; t++) {
    let data = input[t].split(' ').map(Number); //각 테스트 케이스 배열을 정수로 변환
    let sum = 0; //총합이 들어갈 변수 
    let n = data[0] //해당 테스트 케이스의 학생수
    for(let i = 1; i <= n; i++) {
        sum += data[i];
    }
    let avg = sum/n; //테스트 케이스의 평균
   
    let count = 0; //평균 이상 학생수 
    for(let i = 1; i <= n; i++) {
        if (data[i]>avg) count += 1;
    }
    console.log(`${(count/n*100).toFixed(3)}%`);
}