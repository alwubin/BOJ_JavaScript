function solution(n, arr1, arr2) {
    arr1.map((v, idx) => {
        let arr;
        if (v.toString(2).length < n) {
            arr = ('0'.repeat(n - v.toString(2).length) + v.toString(2)).split('').map(Number);
        }
        else arr = (v.toString(2)).split('').map(Number);
        arr1[idx] = arr;
    })
    
    arr2.map((v, idx) => {
        let arr;
        if (v.toString(2).length < n) {
            arr = ('0'.repeat(n - v.toString(2).length) + v.toString(2)).split('').map(Number);
        }
        else arr = (v.toString(2)).split('').map(Number);
        arr2[idx] = arr;
    })
    
    let answer = [];
    arr1.map((v, l) => {
        let line = '';
        v.map((x, r) => {
            if (x + arr2[l][r] > 0) line += '#';
            else line += ' ';
        })
        answer.push(line);
    })
    
    return answer;
}