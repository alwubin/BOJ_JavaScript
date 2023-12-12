function solution(fees, records) {
    let parking = new Map();

    records.forEach((record) => {
        let [time, car, action] = record.split(' ');
        let [hour, minute] = time.split(':').map(Number);
        let parkingTime = hour * 60 + minute;

        //처음 입차 시
        if (typeof parking.get(car) === 'undefined') parking.set(car, [parkingTime, 'IN'])
        //처음 출차 시 
        if (action === 'OUT' && parking.get(car)[1] === 'IN') {
            parking.set(car, [parkingTime - parking.get(car)[0], 'OUT'])
        }
        //재 입차 시 
        if (action === 'IN' && parking.get(car)[1] === 'OUT') {
            parking.set(car, [parkingTime - parking.get(car)[0], 'IN'])
        }

        })

    let carList = [];
    parking.forEach((record, car) => {
        let [time, action] = record;

        //마지막 기록이 입차 시 
        if (action === 'IN') {
            let latestTime = 23*60 + 59
            let parkingTime = latestTime - time;
            //기본 시간 이하
            if (parkingTime <= fees[0])
                carList.push([Number(car), fees[1]])
            //기본 시간 초과 
            if (parkingTime > fees[0])
                carList.push([Number(car), fees[1] + Math.ceil((parkingTime - fees[0]) / fees[2]) * fees[3]])
        }

        //마지막 기록이 출차 시 
        if (action === 'OUT') {
            //기본 시간 이하
            if (time <= fees[0])
                carList.push([Number(car), fees[1]])
            //기본 시간 초과
            if (time > fees[0])
                carList.push([Number(car), fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3]])
        }

    })
    let ans = carList.sort((a, b) => a[0] - b[0])
    let answer = []
    ans.forEach((car) => {
        answer.push(car[1]);
    })
    return answer;
}