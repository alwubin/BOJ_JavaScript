function solution(nums) {
    let set = new Set(nums)
    let getNums = parseInt(nums.length / 2);
    let answer;
    set.size > getNums ? answer = getNums : answer = Array.from(set).length;
    return answer;
}