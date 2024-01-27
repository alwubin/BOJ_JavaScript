function solution(a, b) {
    let cal1 = '';
    cal1 += a + '' + b;
    cal1 = Number(cal1);
    
    let cal2 = 2 * a * b;
    
    let answer = Math.max(cal1, cal2);
    return answer;
}