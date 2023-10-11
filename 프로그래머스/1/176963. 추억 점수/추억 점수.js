function solution(name, yearning, photo) {
    let ans = [];
    let map = new Map();
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        let arr = photo[i];
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (map.has(arr[j])) sum += map.get(arr[j]);
            else sum += 0;
        }
        ans.push(sum);
    }
    return ans;
}