const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().split('\n');

    input = input[0];
    input = input.split(' ').map((item) => +item); 

    solution(input[0], input[1]);
} else {
    console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
}

function solution(){
    if ( A >= 90 && A <= 100){
        return "A"
    } else if (A >= 80 && A <= 89){
        return "B"
    } else if (A >= 70 && A <= 79){
        return "C"
    } else if (A >= 60 && A <= 69){
        return "D"
    } else {
        return "F"
    }
    console.log (solution(A));
}
