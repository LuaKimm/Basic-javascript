const fs = require('fs');
const path = require('path');

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, 'input.txt');

if (fs.existsSync(filePath)) {
    let input = fs.readFileSync(filePath).toString().split('\n');

    input = input.map((item) => +item);

    solution(input[0], input[1]);
} else {
    console.error(`Error: ${filePath} 파일이 존재하지 않습니다.`);
}
 
    function solution(A, B){
        const strB = String(B);
        const one = +strB[2];
        const ten = +strB[1];
        const hun = +strB[0];

        console.log(A*one);
        console.log(A*ten);
        console.log(A*hun);
        console.log(A*B);
}
