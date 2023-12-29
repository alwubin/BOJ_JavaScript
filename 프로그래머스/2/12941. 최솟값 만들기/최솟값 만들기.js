function solution(A,B){
    var answer = 0;
    
    A.sort((a,b) => b - a);
    B.sort((a,b) => a - b);

    A.forEach((num, idx) => {
      answer += num * B[idx];
    })
    
    return answer;
}