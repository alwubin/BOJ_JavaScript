function solution(X, Y) {
    let cntX = new Array(10).fill(0);
    let arrX = X.split('');
    arrX.forEach((x) => {cntX[x]++;})
    
    let cntY = new Array(10).fill(0);
    let arrY = Y.split('');
    arrY.forEach((y) => {cntY[y]++;})
    
    var answer = [];
    cntX.forEach((x, idx) => {
        if (x !== 0 && cntY[idx] !== 0) {
            let min = Math.min(x,cntY[idx]);
            answer.push(String(idx).repeat(min));
        }
    })
    
    if (answer.length == 0) 
        return '-1';
    else if (Number(answer.join('')) === 0) 
        return '0';
    else 
        return answer.reverse().join('');
}