function solution(a, b, c) {
    var answer = 0;
    let set = new Set();
    
    set.add(a);
    set.add(b);
    set.add(c);
    
    if (set.size === 3) {
        answer += a + b + c;
    } else if (set.size === 2) {
        answer += (a + b + c) * (a**2 + b**2 + c**2);
    } else {
        answer += (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }
    
    return answer;
}