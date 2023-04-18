const greetingTag = document.querySelector(".hello-text");
const userNameInput = document.querySelector(".userName-input");
function showMessage() {
    let hello;
    let currentHour = new Date().getHours();
    if (currentHour >= 4 && currentHour < 12) // after 4:00AM and before 12:00PM
    { hello = "Good morning"; }
    else if (currentHour >= 12 && currentHour <= 18) // after 12:00PM and before 6:00pm
    { hello = "Good afternoon"; }
    else if (currentHour > 18 || currentHour < 4) // after 6:00pm || before 4:00AM 
    {
        { hello = "Good evening"; }
    }
    greetingTag.innerHTML = hello;
}

setInterval(showMessage, 1000);

