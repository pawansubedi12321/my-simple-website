var start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
int=null;
start.addEventListener("click",()=>{
    int=setInterval(displaytime,10) ;
})

    
    
    
stop.addEventListener("click",()=>{
        clearInterval(int);
});

reset.addEventListener("click",()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours]=[0,0,0,0];
    document.getElementById("minutes").innerHTML="00:00:00:000";
})





function displaytime(){
  
   milliseconds+=10;
    if (milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++
        }

    }
    var time=hours+":"+minutes+":"+seconds+":"+milliseconds;
    document.getElementById("minutes").innerHTML=time;
}
