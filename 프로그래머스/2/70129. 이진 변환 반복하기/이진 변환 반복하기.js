function solution(s) {
    let answer = [];
    let str = '';    
    let zero = 0; 
    let repeat = 0;


    while(s !== '1') {

        s = s.split('');

        s.forEach(num => {
            if(num == '1') str += num;
            else if(num == '0') zero += 1;
        })


        s = String((str.length).toString(2));

        str = ""; 
        repeat += 1;
    }


    answer = [repeat, zero];

    return answer;
}