let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function binarySearch(arr, target, start, end) {
    let mid = parseInt((start+end) / 2);
    if (start > end) return -1;

    if (arr[mid] == target) return mid;
    else if(arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    else return binarySearch(arr, target, mid+1, end);
}

let testCase = Number(input[0]); //테스트 케이스
let i = 1

for (let t = 0; t < testCase; t++) {
    let n = Number(input[i]); //수첩1에 적힌 정수 개수
    let note1 = input[i+1].split(' ').map(Number); //수첩1에 적힌 정수
    let m = Number(input[i+2]); //수첩2에 적힌 정수 개수
    let note2 = input[i+3].split(' ').map(Number); //수첩2에 적힌 정수
    note1.sort((a,b) => a-b);
    let result = [];

    for (let j = 0; j < m; j++) {
        let ans = binarySearch(note1, note2[j], 0, n-1);
        if (ans == -1) result.push(0);
        else result.push(1);
    }
    console.log(result.join('\n'));
    i += 4;
}

