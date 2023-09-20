let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//x보다 작거나 같으면 가장 가까운 2^i를 찾는 함수 
function nearestSquare(x) {
    let i = 1; 
    while ((2**i) <= x) i += 1;
    return i -1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0); //가장 큰 큐브 가 2**20 

let n = Number(input[1]);
for (let i = 2; i <= n+1; i++) {
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    cubes[a] = b;
}
let size = 19;
//박스 모서리 길이 중에서 가장 짧은 모서리 구하기
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;
//큐브 크기 큰 것부터 넣기 
for (let i = size; i >= 0; i--) {
    used *= 8 //가로 세로 높이가 2씩 줄기 때문에 큐브 크기가 작아질수록 큐브의 개수는 8배 증가됨
    cur = (2**i) //현재 정육면체 큐브의 한 변의 길이
    //채워넣어야 할 큐브의 개수 
    let required = parseInt(length/cur)
    *parseInt(width/cur)
    *parseInt(height/cur)-used;
    
    let usage = Math.min(required, cubes[i]); //현재 단계에서 넣을 수 있는 큐브의 개수
    res += usage;
    used += usage;
}

if (used == length*width*height) console.log(res); //박스를 가득 채운 경우
else console.log(-1); //박스를 가득채우지 못한 경우

