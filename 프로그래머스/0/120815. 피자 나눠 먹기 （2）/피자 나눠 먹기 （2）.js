function solution(n) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b)
    const m = lcm(n, 6)
    return parseInt(m / 6)
}