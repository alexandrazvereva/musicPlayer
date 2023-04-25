let isPlaying = false;
let song0 = new Audio("./assets/music/grieg-morning.mp3");
let song1 = new Audio("./assets/music/mozart-night-serenade.mp3");
let song2 = new Audio("./assets/music/vivaldi-spring.mp3");
let song3 = new Audio("./assets/music/tchaikovsky.mp3");
let song4 = new Audio("./assets/music/sergei-prokofiev-romeo-and-juliet.mp3");
let song5 = new Audio("./assets/music/tchaikovsky-the-sleeping-beauty-ballet.mp3");
let song6 = new Audio("./assets/music/georges-bizet-carmen.mp3");
let play = document.querySelector("#play-song");
let currentSong = 0;
const SONGS = [song0, song1, song2, song3, song4, song5, song6];

const songLi0 = document.querySelector("#songLi0");
const songLi1 = document.querySelector("#songLi0");
const songLi2 = document.querySelector("#songLi0");
const songLi3 = document.querySelector("#songLi0");
const songLi4 = document.querySelector("#songLi0");
const songLi5 = document.querySelector("#songLi0");
const songLi6 = document.querySelector("#songLi0");




const songNames = document.querySelectorAll("li");

function showActiveSong() {
    songNames.forEach(li => {
        if (li.id.slice(6) == currentSong) {
            li.classList.add("active-song");
        }
        else li.classList.remove("active-song");
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
    isPlaying = !isPlaying;
    showActiveSong();
});

let prev = document.querySelector("#prev-song");
prev.addEventListener("click", () => {
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
    SONGS[currentSong].pause();
    currentSong++;
    if (currentSong === SONGS.length) {
        currentSong = 0;
    }
    SONGS[currentSong].play();
    isPlaying = true,
        play.classList.remove("play-song");
    play.classList.add("pause-song");

    showActiveSong();
});

