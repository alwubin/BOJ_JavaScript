function solution(arr) {
    let min = arr.reduce((acc, cur) => {
        return (acc < cur) ? acc : cur;
    })
    arr.splice(arr.indexOf(min), 1);
    if (arr.length === 0) arr.push(-1);
    return arr;
}