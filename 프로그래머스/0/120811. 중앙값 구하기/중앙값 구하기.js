function solution(array) {
    const arr = array.sort((a, b) => a - b)
    var answer = parseInt(arr.length / 2)
    return array[answer];
}