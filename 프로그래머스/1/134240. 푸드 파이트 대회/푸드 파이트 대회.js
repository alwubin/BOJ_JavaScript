function solution(food) {
    let arr = [1];
    for (let i = 1; i < food.length; i++) {
        let cnt = parseInt(food[i]/2);
        arr.push(cnt);
    }
    let player1 = ''
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            player1 += i + '';
        }
    }
    let player2 = player1.split("").reverse().join("");
    let ans = player1 + '0' + player2;
    return ans;
}