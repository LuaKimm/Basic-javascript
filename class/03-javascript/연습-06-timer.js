let time = 10;

setInterval(function(){
    if (time>=0){}
})
1
setInterval(function(){
    if (time>=0){
        console.log(time)
        time = time-1
    }
},1000)