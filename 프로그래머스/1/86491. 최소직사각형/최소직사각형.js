function solution(sizes) {
    let width = [];
    let height = [];
    sizes.forEach((rowArray) => {
        let [x, y] = rowArray;
        width.push(Math.max(x, y));
        height.push(Math.min(x, y));
    });
    width.sort((a,b) => b-a);
    height.sort((a,b) => b-a);

    return width[0]*height[0];
}