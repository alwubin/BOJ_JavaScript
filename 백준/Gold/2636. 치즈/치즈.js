let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, w] = input.shift().split(' ').map(Number);
let cheeseMap = [];
for (let item of input) {
  cheeseMap.push(item.split(' ').map(Number));
}

const move = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1]
];
let cheeseNum = 0;
cheeseMap.map((item) => item.map((item2) => (cheeseNum += item2)));
let time = 0;

while (1) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (i === 0 || i === h-1 || j === 0 || j === w-1) {
        if (cheeseMap[i][j] === 0) {
          cheeseMap[i][j] = false;
          dfs(i, j);
        }
      }
    }
  }

  let meltedCheese = 0;

  cheeseMap = cheeseMap.map((item) => item.map((item2) => {
    if (item2 === false) item2 = 0;
    else if (item2 === 'M') {
      item2 = 0;
      meltedCheese++;
    }

    return item2;
  }));
  time++;

  if (cheeseNum - meltedCheese === 0) {
    console.log(time);
    console.log(meltedCheese);
    break;
  } else {
    cheeseNum -= meltedCheese;
  }
}

function dfs(y, x) {
  for (let mv of move) {
    const [ny, nx] = [y + mv[1], x + mv[0]];
    if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
    if (cheeseMap[ny][nx] === false)continue;
    if (cheeseMap[ny][nx] === 1) {
      cheeseMap[ny][nx] = 'M';
    }
    else if (cheeseMap[ny][nx] === 0) {
      cheeseMap[ny][nx] = false;
      dfs(ny, nx);
    }
  }
}