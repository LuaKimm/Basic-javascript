let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "그루트", age: 5},
    {name: "도비", age: 3}
]
//undefined

for (let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19){
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
    
}
//VM6818:5 미성년자입니다
//VM6818:3 성인입니다
//2VM6818:5 미성년자입니다

for (let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19){
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name + "님은 미성년자입니다")
    }
    
}
//VM6969:5 철수님은 미성년자입니다
//VM6969:3 영희님은 성인입니다
//VM6969:5 그루트님은 미성년자입니다
//VM6969:5 도비님은 미성년자입니다

const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
]
undefined
for (let rank = 0; rank < fruits.length; rank++){
    console.log(fruits[rank].number + " " + fruits[rank].title)
}
//VM7491:2 1 레드향
// VM7491:2 2 샤인머스켓
//VM7491:2 3 산청딸기
//VM7491:2 4 한라봉
//VM7491:2 5 사과
//VM7491:2 6 애플망고
//VM7491:2 7 딸기
//VM7491:2 8 천혜향
//VM7491:2 9 과일선물세트
//VM7491:2 10 귤

for (let rank = 0; rank < fruits.length; rank++){
    console.log(`${fruits[rank].number} ${fruits[rank].title}`)
}
//VM7515:2 1 레드향
//VM7515:2 3 산청딸기
//VM7515:2 4 한라봉
//VM7515:2 5 사과
//VM7515:2 6 애플망고
//VM7515:2 7 딸기
//VM7515:2 8 천혜향
//VM7515:2 9 과일선물세트
//VM7515:2 10 귤

for (let rank = 0; rank < fruits.length; rank++){
    console.log(`${fruits[rank].number}위는 ${fruits[rank].title}입니다`)
}
//VM7613:2 1위는 레드향입니다
//VM7613:2 2위는 샤인머스켓입니다
//VM7613:2 3위는 산청딸기입니다
//VM7613:2 4위는 한라봉입니다
//VM7613:2 5위는 사과입니다
//VM7613:2 6위는 애플망고입니다
//VM7613:2 7위는 딸기입니다
//VM7613:2 8위는 천혜향입니다
//VM7613:2 9위는 과일선물세트입니다
//VM7613:2 10위는 귤입니다