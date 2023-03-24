let isPlaying=false;
let song1= new Audio("./grieg-morning.mp3");

let play=document.querySelector("#play-song");
play.addEventListener("click",()=>{
 

    if(isPlaying === false) {
    song1.play();
    play.classList.remove("play-song");
    play.classList.add("pause-song");
    } else {
        song1.pause();
        play.classList.add("play-song");
        play.classList.remove("pause-song");
    }
    isPlaying=!isPlaying ;//vozmi isPlay i sdelai protivopoloznoe znachenie
});
let prev=document.querySelector("#prev-song");
prev.addEventListener("click",()=>{
console.log("You pressed prev-song")
});
let next=document.querySelector("#next-song");
next.addEventListener("click",()=>{
console.log("You pressed next-song")
});