let classmates = ['철수','영희','훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length
// 4
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer = ['끈기','영어','흥미','가독성','도전']
//undefined
developer[0]
//'끈기'
let dream = ["커리어점프","성공","할수있다"]
//undefined
developer.push(dream)
//6
developer
//(6) ['끈기', '영어', '흥미', '가독성', '도전', Array(3)]0: "끈기"1: "영어"2: "흥미"3: "가독성"4: "도전"5: (3) ['커리어점프', '성공', '할수있다']length: 6[[Prototype]]: Array(0)
developer.concat(dream)
//(9) ['끈기', '영어', '흥미', '가독성', '도전', Array(3), '커리어점프', '성공', '할수있다']
developer.pop()
//(3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
//(8) ['끈기', '영어', '흥미', '가독성', '도전', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
//undefined
result
//(8) ['끈기', '영어', '흥미', '가독성', '도전', '커리어점프', '성공', '할수있다']