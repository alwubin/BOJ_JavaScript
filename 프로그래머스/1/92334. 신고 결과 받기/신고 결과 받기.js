function solution(id_list, report, k) {
    report = [...new Set(report)];

    let userMap = new Map();
    let reportedMap = new Map(); //신고당한 사람 카운트 
    let result = [];

    id_list.forEach((id) => {
        userMap.set(id, []); //신고 대상 넣을 배열
        reportedMap.set(id, 0); //신고 당한 사람 카운트
    });

    report.forEach((report) => {
        let [reporter, reportee] = report.split(" ");
        userMap.get(reporter).push(reportee);
        reportedMap.set(reportee, reportedMap.get(reportee) + 1);
    });

    reportedMap.forEach((value, key) => {
        if (value < k) reportedMap.delete(key);
    })

    userMap.forEach((v, k) => {
        let cnt = 0;
        reportedMap.forEach((value, key) => {
            if (v.includes(key)) cnt++;
        })
        result.push(cnt);
    })
    
    return result;
}