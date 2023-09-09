let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number); //숙제 제출한 학생들 번호 배열 
let studentNum = [];
let notSubmit = [];

for (let i = 1; i <= 30; i++) {
    studentNum.push(i); //학생 번호 1~30 
}

for (let j = 0; j < 30; j++) { //제출한 학생 번호를 전체 학생 번호 배열에 비교
    if (data.includes(studentNum[j]) == false) //제출 배열에 학생 번호가 존재하지 않
        notSubmit.push(studentNum[j]); //제출 안한 학생 배열에 추가
}
//여러자릿수 오름차순 정렬시, a, b에 배열값을 넣어 순차적으로 비교하여 재정렬, a>b 양수 a<b 음수 리턴됨
notSubmit.sort((a,b)=>a-b);
console.log(notSubmit[0]);
console.log(notSubmit[1]);