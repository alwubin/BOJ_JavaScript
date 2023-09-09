let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0]; //입력받은 단어 문자열 저장 
word = word.toUpperCase(); //모두 대문자로 변경 

const arr = [...word]; //spread 연산자로 문자열을 배열 만들어주기 
const result = {}; //중복 횟수 센 객체 배열 생성

arr.forEach((x) => {
  result[x] = (result[x] || 0) + 1; //조건문으로, if (result[x]가 있으면) 그 값 +1 없으면 0+1
});

let arrSet = Object.keys(result); //객체 key값들을 배열로 저장
let arrCnt = Object.values(result); //객체 value값들을 배열로 저장 

let max = arrCnt.reduce((a,b) => Math.max(a,b)); //value 중에 가장 큰 값 구하기 
if (arrCnt.indexOf(max) == arrCnt.lastIndexOf(max)) 
    console.log(arrSet[arrCnt.indexOf(max)]); //max 값이 한 개 
else console.log('?'); //max(value) 값이 여러개 