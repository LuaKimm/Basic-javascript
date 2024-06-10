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

function solution(input) {
    let N = Number(input);

  for (let i = 1; i<10; i++){
    console.log(N, "*", i, "=", N*i);
  }
}