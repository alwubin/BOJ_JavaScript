let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number); //나무의 수와 집으로 가져가려는 나무의 길이
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b); //나무들의 높이


let start = 1; //절단기에 설정할 높이 최소 길이
let end = arr[n-1]; //절단기에 설정할 높이 최대 길이
//target = 절단기에 설정할 수 있는 높이의 최댓값
let result = 0; //절단 높이 최대 길이
while (start <= end) { //이진 탐색 조건 
    let mid = parseInt((start+end)/2);
    let total = 0; //절단 후 절단된 길이 합
    for (x of arr) { //절단 후 절단된 길이 합 구하기
        total += x - Math.min(mid, x);
    }
    
    if (total >= m) { //절단에 최소 길이를 넣으면 절단 후 절단된 길이 합이 최대
        result = mid;
        start = mid + 1;
    }
    else end = mid - 1;
}
console.log(result);