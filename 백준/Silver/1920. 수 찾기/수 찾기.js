let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


function binarySearch(arr, target, start, end) {
    if (start > end) return -1;
    let mid = parseInt((start+end)/2);
    if (arr[mid] == target) return 1;
    else if (arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    else return binarySearch(arr, target, mid+1, end);
}

let n = Number(input[0]); //A의 개수 
let arr = input[1].split(' ').map(Number); //이진 탐색 실행할 배열
let m = Number(input[2]); //target의 개수
let t = input[3].split(' ').map(Number); //target
arr.sort((a,b) => a-b); //이진 탐색 조건: 정렬된 배열 내에서 실행됨

let ans = [];

for (let i = 0; i < m; i++) {
    let result = binarySearch(arr, t[i], 0, n-1);
    if (result == -1) ans.push(0);
    else ans.push(1);
}

console.log(ans.join('\n'));