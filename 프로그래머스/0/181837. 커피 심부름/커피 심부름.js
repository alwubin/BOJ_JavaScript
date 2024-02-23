function solution(order) {
    var answer = 0;
    let americano = ["iceamericano", "americanoice", "hotamericano", "americanohot", "americano", "anything"];
    let cafelatte = ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"];
    
    order.forEach((x) => {
        if (americano.indexOf(x) > -1) {
            answer += 4500;
        }
        if (cafelatte.indexOf(x) > -1) {
            answer += 5000;
        }
    })
    
    return answer;
}