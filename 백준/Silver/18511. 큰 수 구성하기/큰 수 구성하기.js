let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, x] = input[0].split(' ').map(Number);
let K = input[1].split(' ').map(Number).sort((a,b) => b - a);
let length = N.toString().length;

//중복 순열
const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
        const permutations = getPermutations(origin, num - 1);

        // 기준값(fixed)에 순열(permutations)을 붙인다.
        const attached = permutations.map(v => [fixed, ...v]);

        // 붙인 값을 결과 값에 넣어준다.
        results.push(...attached);
    });

    return results;
}

while (1) {
    let permutations = getPermutations(K, length);
    let answer = -1;
    permutations.some((value) => {
        let number = Number(value.join(''));
    
        if (N >= number) {
            answer = number;
            return true;
        }
    })
    if (answer !== -1) {
        console.log(answer);
        break;
    }
    length -= 1;
}