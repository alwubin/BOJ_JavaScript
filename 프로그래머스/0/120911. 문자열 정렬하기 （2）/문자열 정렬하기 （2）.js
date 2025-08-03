function solution(my_string) {
    const ms = my_string.toLowerCase().split('').sort().join('')
    return ms;
}