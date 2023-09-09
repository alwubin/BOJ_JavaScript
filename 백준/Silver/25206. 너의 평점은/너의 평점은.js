let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
 
let sum = 0; //전공과목별 (학점 × 과목평점)
let scores = 0; //학점 총합

for (let i = 0; i < 20; i++) {
  let data = input[i].split(' ');
  let score = Number(data[1]);
  let grade = data[2]; //학점
  if (grade == 'A+') grade = 4.5;
  else if (grade == 'A0') grade = 4.0;
  else if (grade == 'B+') grade = 3.5;
  else if (grade == 'B0') grade = 3.0;
  else if (grade == 'C+') grade = 2.5;
  else if (grade == 'C0') grade = 2.0;
  else if (grade == 'D+') grade = 1.5;
  else if (grade == 'D0') grade = 1.0;
  else if (grade == 'F') grade = 0.0; 
  else {grade = 0.0; score = 0;} //P일 때 
  scores += score; // 학점 총합 
  sum += score * grade; //전공과목별 (학점 × 과목평점)
}

console.log((sum/scores).toFixed(6));
