const greetingTag=document.
function showMessage() {
    let currentHour = new Date().getHours();
    if (currentHour >= 4 && currentHour < 12) // after 4:00AM and before 12:00PM
    { console.log("Good morning") }
    else if (currentHour >= 12 && currentHour <= 18) // after 12:00PM and before 6:00pm
    { console.log("Good afternoon") }
    else if (currentHour > 18 || currentHour < 4) // after 6:00pm || before 4:00AM 
    {
        { console.log("Good evening") }
    }
}
;
showMessage();