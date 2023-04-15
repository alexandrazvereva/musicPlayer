let hoursDiv=document.querySelector(".hours");
let minutesDiv=document.querySelector(".minutes");
let secondsDiv=document.querySelector(".seconds");

function showCurrentTime() {
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    //console.log(hours +":"+ minutes+":" +seconds+":")
    // hoursDiv.innerHTML=hours<10 ?"0"+hours:hours ;
    // minutesDiv.innerHTML=minutes<10 ?"0"+minutes:minutes ;
    // secondsDiv.innerHTML=seconds <10 ?"0"+seconds:seconds ;
    let totalTime= now.toLocaleTimeString();
    hoursDiv.innerHTML=totalTime;
    
}
setInterval(showCurrentTime,1000);






