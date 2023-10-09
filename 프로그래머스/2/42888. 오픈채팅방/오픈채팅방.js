function solution(record) {
    let ans = [];
    let userId = {};
    record.forEach((msg) => {
        let [state, id, name] = msg.split(' ');
        if (state == 'Enter' || state == 'Change') {
            userId[id] = name;
        }
    })
    
    record.forEach((msg) => {
        let [state, id, name] = msg.split(' ');
        if (state == 'Enter') ans.push(`${userId[id]}님이 들어왔습니다.`);
        else if (state == 'Leave') ans.push(`${userId[id]}님이 나갔습니다.`);
    })
    
    return ans;
}