let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function recurrenceFormula(n) {
    if (n <= 1) {
        return 1;
    }
    return n*recurrenceFormula(n-1);
}

console.log(recurrenceFormula(Number(input[0])));