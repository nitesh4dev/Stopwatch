var hour = 0 , minute = 0 , second = 0;
var hourDisplay = 0 , minuteDisplay = 0 , secondDisplay = 0;

function timer(){
  
    second++;

    if(second/60==1){
        second=0;
        minute++;
    }
    if(minute/60==1){
        minute=0;
        hour++;
    }
    (hour<10)? hourDisplay = '0'+ hour :hourDisplay= hour;
    (minute<10)? minuteDisplay = '0'+ minute :minuteDisplay= minute;
    (second<10)? secondDisplay = '0'+ second :secondDisplay= second;

    displayTime = document.getElementById('displayTime');
    displayTime.innerHTML= innerHTML=`${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
};
start=()=> {
    interval=setInterval(timer,1000);
 };

 stop=()=>{
    clearInterval(interval);
};
 reset = () =>{
    clearInterval(interval);
    hour = 0 , minute = 0 , second = 0;
    displayTime.innerHTML= '00:00:00';
};
