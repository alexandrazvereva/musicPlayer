const hoursDiv=document.querySelector(".hours");
const minutesDiv=document.querySelector(".minutes");
const secondsDiv=document.querySelector(".seconds");

const dateDiv=document.querySelector(".date")
let now=new Date();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]

function showCurrentDate(){
let day=now.getDay();
let month=now.getMonth();
let date=now.getDate();
console.log("day",day);
console.log("month",month);
console.log("date",date);

dateDiv.innerHTML=date+ " " + months[month]+", "  + days[day];
}
showCurrentDate();

function showCurrentTime() {
   
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








