// function sending(){
//     document.getElementById("verNum").innerHTML = String(Math.floor(Math.random(verNum) *1000000));
// }

const auth = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token;
    document.getElementById("target").style.color = "#" + token;
}

const start = () => {
let time = 180;
setInterval(function(){
    if(time >=0) {
       const min = Math.floor( time / 60 )
       const sec = String(time % 60).padStart(2, "0")
        time = time - 1
    }
},1000)

    document.getElementById("timer").innerText = start;
}