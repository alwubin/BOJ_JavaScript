let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //설탕 배달해야 할 그람수 
let total = 0;

if (n % 5 == 0) { //n = 5*i
    total += parseInt(n/5); 
}
else if (n % 5 == 3) { //n = 5*i + 3
  total += parseInt(n/5) + 1;
}
else {
   if (n == 12 || n == 9 || n == 6) total = parseInt(n/3); //n = 3*i
  else {
    let cnt = 0;
    while (1) { 
      n = n - 5;
      if (n < 5) //n != 5*i + 3*j
        break;
      cnt += 1; //i값 
      if (n == 12 || n == 9 || n == 6) break; //n = 5*i + 3*j 
    }
    if (cnt == 0) total = -1; //n != 5*i + 3*j
    else total += cnt + parseInt(n/3);
  }
}
console.log(total);