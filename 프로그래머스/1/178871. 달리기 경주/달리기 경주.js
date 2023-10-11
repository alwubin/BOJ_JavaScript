function solution(players, callings) {
    let pList = {};
    let rList = {};

    players.forEach((player, idx) => {
      const rank = idx+1;
      pList[player] = rank; //player is key 
      rList[rank] = player; //rank is key
    })

    callings.forEach((call) => {
      const lose = rList[pList[call]-1];

      rList[pList[call]] = lose;
      rList[pList[lose]] = call;
      pList[call] -= 1;
      pList[lose] += 1;
    })

    return Object.values(rList);
}