const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().split('\n');

    input = input[0];
    input = input.split(' ').map((item) => +item); 

    solution(input);
} else {
    console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
}

function solution(inputTestCase) {
  const [A, B, C] = inputTestCase;
  let S = 0;

  if (A === B && B === C) {
      S = 10000 + A * 1000;
  } else if (A === B || A === C) {
      S = 1000 + A * 100;
  } else if (B === C) {
      S = 1000 + B * 100;
  } else {
      S = Math.max(...inputTestCase) * 100;
  }
  console.log(S);
}