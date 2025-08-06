function solution(age) {
    var answer = '';
    const aph = 'abcdefghijklmnopqrstuvwxyz'
    const a = aph.split('')
    age = age.toString().split('')
    age.forEach((g) => {
        answer += a[Number(g)]
    })
    return answer;
}