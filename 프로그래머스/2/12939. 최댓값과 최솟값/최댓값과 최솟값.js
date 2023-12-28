function solution(s) {
    let array = s.split(' ').map(Number).sort((a,b) => a-b);

    let answer = '';
    answer += array[0] + " " + array[array.length-1];
    
    return answer;
}