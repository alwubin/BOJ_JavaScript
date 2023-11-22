function solution(n) {
    let value = Math.sqrt(n);
    if (Number.isInteger(value)) return (value + 1)**2;
    if (!Number.isInteger(value)) return -1;
}