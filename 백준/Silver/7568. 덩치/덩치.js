const fs = require("fs");
 const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\n/);

 const height = [];
 const weight = [];
 const answer = [];

 for (let i = 0; i < n; i++) {
   const newArr = arr[i].split(" ").map(Number);
   weight.push(newArr[0]);
   height.push(newArr[1]);
   answer.push(1);
 }

 for (let i = 0; i < n; i++) {
   for (let j = 0; j < n; j++) {
     if (weight[i] < weight[j] && height[i] < height[j]) {
       answer[i]++;
     }
   }
 }

 console.log(answer.join(" "));