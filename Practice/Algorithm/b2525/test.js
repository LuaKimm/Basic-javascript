const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().split('\n');

    input = input[0];
    input = input.split(' ').map((item) => +item); 

    solution(input[0], input[1], input[2]);
} else {
    console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
}


function solution(A, B, C){
if(A === B === C){
  (A*1000) += 10000
  console.log (A);
}
}
