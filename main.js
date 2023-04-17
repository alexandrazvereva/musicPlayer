let isPlaying = false;
let song0 = new Audio("./grieg-morning.mp3");
let song1 = new Audio("./mozart-night-serenade.mp3")
let song2 = new Audio("./vivaldi-spring.mp3")
let song3 = new Audio("./tchaikovsky.mp3")
let play = document.querySelector("#play-song");
let currentSong = 3;
const SONGS = [song0, song1, song2, song3];

const songLi0=document.querySelector("#songLi0");
const songLi1=document.querySelector("#songLi0");
const songLi2=document.querySelector("#songLi0");
const songLi3=document.querySelector("#songLi0");

const songNames=document.querySelectorAll("li");
console.log(songNames);

function showActiveSong() {
   songNames.forEach(li=>{
    
    if(li.id.slice(6)==currentSong) {
        li.classList.add("active-song");
    }
    else   li.classList.remove("active-song");
   })
}


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
showActiveSong();
});



let prev = document.querySelector("#prev-song");
prev.addEventListener("click", () => {
    console.log("You pressed prev-song")
    SONGS[currentSong].pause();
    currentSong--;
    if (currentSong < 0) {
        currentSong = SONGS.length - 1;
    }
    SONGS[currentSong].play();
    isPlaying = true,
        play.classList.remove("play-song");
    play.classList.add("pause-song");
    showActiveSong();
});


let next = document.querySelector("#next-song");
next.addEventListener("click", () => {
    console.log("You pressed next-song")
    SONGS[currentSong].pause();
    currentSong--;
    if (currentSong < 0) {
        currentSong = SONGS.length - 1;
    }
    SONGS[currentSong].play();
    isPlaying = true,
        play.classList.remove("play-song");
    play.classList.add("pause-song");

    showActiveSong();
});

// //// Create the audio element for the player
// let curr_track = document.createElement('audio');
 
// // Define the list of tracks that have to be played
// let track_list = [
//   {
//     name: "",
//     artist: "",
//     image: "Image URL",
//     path: ".mp3"
//   },
//   {
//     name: "",
//     artist: "",
//     image: "Image URL",
//     path: ".mp3"
//   },
//   {
//     name: "",
//     artist: "",
//     image: "Image URL",
//     path: ".mp3",
//   },
// ];