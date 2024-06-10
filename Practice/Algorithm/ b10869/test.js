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

const name = null;
function name(){
    if( name === joonas){
        return name + '??!';
    } else {
        name;
    }
    console.log(name(joonas));
}

