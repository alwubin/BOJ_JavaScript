function solution(s, n) {
    var answer = '';
    [...s].forEach((char) => {
      let ascii = char.charCodeAt();
      if (65 <= ascii && ascii <= 90) {
          answer += String.fromCharCode((ascii + n - 65) % 26 + 65);
      }
      if (97 <= ascii && ascii <= 122) {
          answer += String.fromCharCode((ascii + n - 97) % 26 + 97);
      }
      if (ascii === 32) answer += char;
    })
    return answer;
}