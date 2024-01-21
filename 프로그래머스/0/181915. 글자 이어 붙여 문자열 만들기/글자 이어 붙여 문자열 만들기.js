function solution(my_string, index_list) {
    var answer = '';
    let array = my_string.split('');
    
    index_list.forEach((v) => {
        answer += my_string[v];
    })
    return answer;
}