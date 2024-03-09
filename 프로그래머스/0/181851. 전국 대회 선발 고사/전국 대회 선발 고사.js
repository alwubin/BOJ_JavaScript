function solution(rank, attendance) {
    let array = [];

    attendance.forEach((a, idx) => {
        if (a) {
            array.push([rank[idx],idx]);
        }
    })
    array.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let answer = 10000*array[0][1] + 100*array[1][1] + array[2][1];
    return answer;
}