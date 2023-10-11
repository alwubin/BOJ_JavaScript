function solution(today, terms, privacies) {
    let [todayY, todayM, todayD] = today.split('.');
    let todayDate = Number(todayY + todayM + todayD);

    let ans = [];
    let list = [];
    for (let i = 0; i < privacies.length; i++) {
        let [ymd, t] = privacies[i].split(' ');
        let [y, m, d] = ymd.split('.').map(Number);
      for (let j = 0; j < terms.length; j++) {
        let [term, valid] = terms[j].split(' ');
        valid = Number(valid);

        if (t == term) {
            m += valid;
            d -= 1;
        }
        if (m > 12) {
            m -= 12;
            y += 1;
        }
        if (d == 0) {
            d = 28;
            m -= 1;
        }
      }

      m = m.toString().padStart(2, 0);
      d = d.toString().padStart(2, 0);
      let date = Number(y + m + d);
      if (date < todayDate) list.push(i+1);
    }

    
    return list;
}