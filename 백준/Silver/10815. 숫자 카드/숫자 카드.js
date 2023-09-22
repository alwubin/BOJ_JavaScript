let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function binarySearch(arr, target, start, end) { //이분 탐색 함수
    if (start > end) return -1;

    let mid = parseInt((start+end)/2);

    if (arr[mid] == target) return mid; //target을 찾았을 때 
    else if (arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    else return binarySearch(arr, target, mid+1, end);
}

let n = Number(input[0]); //숫자 카드 개수
let arrCard = input[1].split(' ').map(Number); //숫자 카드에 적혀진 정수 
let m = Number(input[2]); //동근이가 낼 숫자카드 개수
let arrNum = input[3].split(' ').map(Number); ////동근이가 낼 숫자카드
arrCard.sort((a,b) =>a-b); //오름차순으로 정렬
let result = [];

for (let i = 0; i < m; i++) { 
    let ans = binarySearch(arrCard, arrNum[i], 0, n-1); //숫자 카드 배열에 동근이가 낼 카드가 있는지 차례로 이분 탐색하기 
    if (ans == -1) result.push(0); //없으면 0
    else result.push(1); //있으면 1
}
console.log(result.join(' '));