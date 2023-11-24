function solution(arr)
{
    let answer = [];
    arr.forEach((v) => {
        if (answer[answer.length-1] !== v || answer.length === 0) answer.push(v);
    })
    return answer;
}