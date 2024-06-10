const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().split('\n');

    let numbers = input[0].split(' ').map((item) => +item);

        if (numbers.length >= 3) {
            solution(numbers[0], numbers[1], numbers[2]);
        } else {
            console.error("Error: input.txt 파일에 최소 세 개의 숫자가 필요합니다.");
        }
    } else {
        console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
    }
    
    function solution(A, B, C){
     console.log((A + B) % C);
     console.log((A % C) + (B % C) % C);
     console.log((A * B) % C);
     console.log((A % C) * (B % C) % C);
    }
