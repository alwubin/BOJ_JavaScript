let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let arr = input[1].split(' ').map(Number);
let result = 0;
let arrow = new Array(1000001).fill(0); //각 높이에 화살이 몇 개 있는지 높이가 인덱스인 배열 생성

for (let x of arr) {
	if (arrow[x] > 0) { //해당 높이에 화살이 있다면 
		arrow[x] -= 1; //풍선을 맞춰서 화살 사라짐
		arrow[x-1] += 1; //x-1높이에 화살 존재
	}
	else { //해당 높이에 화살이 없다면 
		arrow[x-1] += 1; //새로운 화살 쏘고 x-1 높이에 화살 존재
		result += 1; //새로운 화살 쏘기 
	}
}
console.log(result);