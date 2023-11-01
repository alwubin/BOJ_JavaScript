function solution(x) {
    let sum = 0;
    for (let i = 0; i < String(x).length; i++) sum += Number(String(x)[i]);
    if (x % sum === 0) return true;
    else return false;
}