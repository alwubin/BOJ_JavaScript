let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0]; //입력받은 단어 문자열
let dial = []; // 문자 to 다이얼 
let sum = 0;

for (let i = 0; i < word.length; i++) {
    if(word[i] == 'A' || word[i] == 'B' || word[i] == 'C') dial.push(3);
    else if(word[i] == 'D' || word[i] == 'E' || word[i] == 'F') dial.push(4);
    else if(word[i] == 'G' || word[i] == 'H' || word[i] == 'I') dial.push(5);
    else if(word[i] == 'J' || word[i] == 'K' || word[i] == 'L') dial.push(6);
    else if(word[i] == 'M' || word[i] == 'N' || word[i] == 'O') dial.push(7);
    else if(word[i] == 'P' || word[i] == 'Q' || word[i] == 'R' || word[i] == 'S') dial.push(8);
    else if(word[i] == 'T' || word[i] == 'U' || word[i] == 'V') dial.push(9);
    else dial.push(10);
}

for (let i = 0; i < dial.length; i++){
    sum += dial[i];
}
console.log(sum);