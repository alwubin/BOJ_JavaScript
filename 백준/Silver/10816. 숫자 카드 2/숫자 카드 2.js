let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start+end)/2);
        if (arr[mid] >= target) end = mid; //최대한 왼쪽으로 이동
        else start = mid + 1;
    }
    return end; //탐색 범위가 한 개일 때 리턴 또는 가장 왼쪽 값을 가리켰을때 리턴
}

function upperBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end)/2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1; //최대한 오른쪽으로 이동
    }
    return end;
}

function countByRange(arr, left, right) {
    let leftIndex = lowerBound(arr, left, 0, arr.length);
    let rightIndex = upperBound(arr, right, 0, arr.length);
    return rightIndex - leftIndex;
}

let n = Number(input[0]);
let cards = input[1].split(' ').map(Number);
let m = Number(input[2]);
let arr = input[3].split(' ').map(Number);
cards.sort((a,b) => a-b);
let result = [];

for (let i = 0; i < m; i++) {
    let ans = countByRange(cards, arr[i], arr[i]);
    result.push(ans);
}
console.log(result.join(' '));