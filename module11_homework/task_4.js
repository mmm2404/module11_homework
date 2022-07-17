


const getNums = function(a,b){
  
    timerID = setInterval(function(){
        if (a<=b){
            console.log(a);
            a++
        }
        else{
            clearInterval(timerID)
        }
    },1000)
}

getNums(8,18);