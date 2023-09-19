let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let pay = Number(input[0]); //지불해야 할 금액
let left = 1000 - pay; //거스름돈 
let cnt = 0;

cnt += parseInt(left/500);
left -= parseInt(left/500)*500;

cnt += parseInt(left/100);
left -= parseInt(left/100)*100;

cnt += parseInt(left/50);
left -= parseInt(left/50)*50;

cnt += parseInt(left/10);
left -= parseInt(left/10)*10;

cnt += parseInt(left/5);
left -= parseInt(left/5)*5;

cnt += parseInt(left/1);
left -= parseInt(left/1)*1;

console.log(cnt);