function solution(babbling) {
const changeBabbling = babbling.map(v=>{
        return v.replace(/aya/g,'A').replace(/ye/g,'B').replace(/woo/g,'C').replace(/ma/g,'D')
    })

    const answer = changeBabbling.filter(v=>{
        const includeABCD = v.replace(/[^ABCD]/g,'')
        const excludeABCD = v.replace(/[ABCD]/g,'')
        let isRepeatSameBabbling = false
        let beforeBabbling = ''

        if(excludeABCD !== ''){
            return false
        }

        includeABCD.split('').forEach(nowBabbling=>{
            if(nowBabbling === beforeBabbling){
                isRepeatSameBabbling = true
            }
            beforeBabbling = nowBabbling
        })

        return !isRepeatSameBabbling
    }).length

    return answer
}
