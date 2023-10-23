function solution(N, stages) {
    let n = Array(N).fill().map((v,i)=> i+1); 
    let failed = [];

    n.forEach((s) => {
        let challenge = 0;
        let notClear = 0;
        stages.forEach((v) => {
            if (v >= s) challenge++;
            if (v == s) notClear++;
        })
        failed.push([s, notClear / challenge]);
    })
    failed.sort((a, b) => b[1] - a[1]);
    let arr = [];
    failed.map((v) => {arr.push(v[0])});
    return arr;
}