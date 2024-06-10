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

function solution(num){
 if( 90 <= num && num >= 100){
    console.log('A');
 }
 else if( 80 <= num && num >= 89){
    console.log('B');
 }
 else if( 70 <= num && num >= 79){
    console.log('C');
 }
 else if( 60 <= num && num >= 69){
    console.log('D');
 } else {
    console.log('F');
 }
}

