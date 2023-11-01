function solution(array, commands) {
    let answer = [];
    commands.forEach((v) => {
        let [i, j, k] = v;
        let arr = array.slice(i-1, j).sort((a,b) => a-b);
        answer.push(arr[k-1]);
    })
    return answer;
}