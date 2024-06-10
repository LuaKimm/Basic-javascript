const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().trim().split('\n');


    solution(input);
} else {
    console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
}

function solution(input) {
    const num = Number(input[0]);

      for(let i=1; i<=num; i++) {
        const [A,B] = input[i].split(' ').map(Number);
        console.log(A+B);
      }
    }