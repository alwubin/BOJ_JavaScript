function solution(n) {
        const array = Array(n+1).fill(0).map((_,idx)=>idx)
    for(let i=2;i<=Math.sqrt(n-1);i++){
        for(let j=i*2;j<array.length;j+=i){
            if(array[j] === 0){
                continue
            }
            if(array[j] % i === 0){
                array[j] = 0
            }
        }
    }

    return array.filter(v=>v!==0).length - 1;
}