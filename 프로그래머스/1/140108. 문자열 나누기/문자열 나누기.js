function solution(s) {
var answer = 0;
    let sameCount = 0, diffCount = 0, sameStr
    s.split('').forEach((str)=>{

        if(sameStr === undefined){
            sameStr = str
            sameCount++
        }
  
        else if(sameStr === str){
            sameCount++
        }

        else{
            diffCount++
        }

        if(sameCount === diffCount){
            sameCount = 0
            diffCount = 0
            sameStr = undefined
            answer++
        }
    })

    if(sameCount !==0 || diffCount !== 0)
        answer++

    return answer
}