    // 배열 만들기
const blanks = []                            // 비어있는 배열
const numbers = [2, 10, 7, 3.3]              // 숫자들로 이루어진 배열
const classmates = ["철수", "영희", "훈이"]     // 문자들로 이루어진 배열

// 배열의 길이 구하기 _ length
classmates.length          // 3

// 배열의 값 꺼내기
classmates[0]              // "철수"
classmates[1]              // "영희"

// 배열의 맨 뒤에 추가하기 _ push
classmates.push("민지")     // ["철수", "영희", "훈이", "민지"]

// 배열의 맨 마지막 삭제하기 _ pop
classmates.pop()          // ["철수", "영희", "훈이"]

// 배열의 요소 정렬하기, 거꾸로 뒤집기 _ sort
classmates.sort()               // ["영희", "철수", "훈이"]

// 배열이 가지고있는 데이터 확인하기 _ includes
classmates.includes("철수")     // true
classmates.includes("영구")     // false