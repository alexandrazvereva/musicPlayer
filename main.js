let isPlaying = false;
let song0 = new Audio("./grieg-morning.mp3");
let song1 = new Audio("./mozart-night-serenade.mp3")
let song2 = new Audio("./vivaldi-spring.mp3")
let song3 = new Audio("./tchaikovsky.mp3")
let play = document.querySelector("#play-song");
let currentSong = 3;
const SONGS = [song0, song1, song2, song3];

play.addEventListener("click", () => {


    if (isPlaying === false) {
        SONGS[currentSong].play();
        play.classList.remove("play-song");
        play.classList.add("pause-song");
    } else {
        SONGS[currentSong].pause();
       play.classList.add("play-song");
        play.classList.remove("pause-song");
    }
    isPlaying = !isPlaying;//vozmi isPlay i sdelai protivopoloznoe znachenie
});


let prev = document.querySelector("#prev-song");
prev.addEventListener("click", () => {
    console.log("You pressed prev-song")
    SONGS[currentSong].pause();
    currentSong--;
if (currentSong<0){
    currentSong=SONGS.length-1;
}
    SONGS[currentSong].play();
    isPlaying=true,
    play.classList.remove("play-song");
    play.classList.add("pause-song");
 
});


let next = document.querySelector("#next-song");
next.addEventListener("click", () => {
    console.log("You pressed next-song")
    SONGS[currentSong].pause();
    currentSong++;
    SONGS[currentSong].play();
});
//dopisat next
