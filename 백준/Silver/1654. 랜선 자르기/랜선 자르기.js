let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let k = Number(input[0].split(' ')[0]); //이미 가지고 있는 랜선의 개수
let n = Number(input[0].split(' ')[1]); //필요한 랜선의 개수
let arr = [];
for (let i = 1; i <= k; i++) {
    arr.push(Number(input[i]));
}
arr.sort((a,b) => a-b);

let start = 1; //랜선 길이 최소값
let end = arr[k-1]; //랜선 길이 최대값
//target = n개로 나눈 랜선의 길이 최대값

let result = 0;
while (start <= end) {
    let mid = parseInt((start+end)/2);
    let total = 0;
    for (x of arr) { //가지고 있는 길이에서 최솟값으로 나눳을 때 몫의 총합 == 새로운 랜선의 개수
        total += parseInt(x / mid);   
    }
  
  if (total < n) { //새로 자른 랜선의 개수가 필요한 랜선의 개수보다 적거나 같을 때 
      end = mid - 1;
  }
  else { //만들 수 있는 랜선의 길이가 충분한 경우 길이 늘리기
      result = mid;
      start = mid + 1;
  }
}
console.log(result);