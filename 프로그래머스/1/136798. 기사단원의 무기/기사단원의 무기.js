function solution(number, limit, power) {
    function divisor(num) {
      let set = new Set();
      for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
          if (set.has(i) || set.has(parseInt(num/i))) break;
          set.add(i);
          set.add(parseInt(num/i));
        }
      }
      return set.size;
    }
    
    const knight = Array(number).fill().map((v, idx) => idx+1);
    let ans = 0;
    
    knight.forEach((k) => {
        if (divisor(k) > limit) ans += power;
        else ans += divisor(k);
    })
    
    return ans;
}