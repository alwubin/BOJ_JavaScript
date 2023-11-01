function solution(n)
{
    let answer = 0;
    let string = Array.from(String(n));
    string.forEach((num) => {
        answer += Number(num);
    })
    return answer;
}