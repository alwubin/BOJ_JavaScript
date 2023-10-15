function solution(k, score) {
    let arr = [];
    let ans = [];

    score.forEach((s) => {
        arr.push(s);
        arr.sort((a,b) => b - a);
        if(arr.length >= k) ans.push(arr[k-1]);
        else ans.push(arr[arr.length-1]);
    })
    return ans;
}