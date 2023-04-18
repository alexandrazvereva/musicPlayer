const hoursDiv = document.querySelector(".hours");
const minutesDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector(".seconds");
const dateDiv = document.querySelector(".date");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function showCurrentDate() {
    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let date = now.getDate();
    dateDiv.innerHTML = date + " " + months[month] + ", " + days[day];
}
showCurrentDate();

function showCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalTime = now.toLocaleTimeString();
    hoursDiv.innerHTML = totalTime;
}
setInterval(showCurrentTime, 1000);








