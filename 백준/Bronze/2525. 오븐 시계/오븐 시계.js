let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);
let addTime = Number(input[1]);

let time = hour*60 + minute;
let endTime = time + addTime;

let endHour = parseInt(endTime/60);
let endMin = endTime%60;

if (endHour >= 24) endHour -= 24;

console.log(endHour + ' ' + endMin);