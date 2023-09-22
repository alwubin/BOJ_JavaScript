let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let x = Number(input[0].split(' ')[0]); //게임 횟수
let y = Number(input[0].split(' ')[1]); //이긴 게임
let z = Math.floor( (100 * y / x)); //승률, 정수 오차 

let start = 0;
let end = x;
//target = 앞으로 할 게임 횟수 

if (z >= 99) console.log(-1);
else {
    let result = 0;
    while (start <= end) {
        let mid = parseInt((start+end)/2);
        let newZ = 0;
  
        newZ = Math.floor( (100 * (y + mid) / (x + mid))); //새로 게임한 후 승률
 
        if (newZ > z) { //승률이 커지는 순간
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    console.log(result);
}