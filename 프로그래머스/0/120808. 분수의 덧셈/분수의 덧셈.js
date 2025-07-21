
function solution(numer1, denom1, numer2, denom2) {
    const a = numer1*denom2 + numer2*denom1
    const b = denom1*denom2
    function gcd(a, b) {
        const r = a % b // 단 a > b
        if (r === 0) return b
        return gcd(b, r)
    }
        const r = gcd(a, b)
        return [a/gcd(a, b), b/gcd(a, b)]
    
}