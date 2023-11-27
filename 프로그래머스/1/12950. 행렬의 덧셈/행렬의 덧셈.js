function solution(arr1, arr2) {
    let ans = [];

    arr1.forEach((arr, i) => {
        let values = [];
        arr.forEach((num, j) => {
            values.push(arr[j] + arr2[i][j]);
        })
        ans.push(values);
    })
    
    return ans;
}