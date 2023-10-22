function solution(absolutes, signs) {
    let result = 0;

    absolutes.map((v,i) => {
        signs[i] ? result += v : result -= v
    });
    
    return result;
}