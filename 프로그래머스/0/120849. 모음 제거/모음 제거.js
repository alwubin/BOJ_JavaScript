function solution(my_string) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    var answer = '';
     my_string.split('').map((s) => {
         if (!arr.includes(s)) answer += s
     })
    return answer;
}