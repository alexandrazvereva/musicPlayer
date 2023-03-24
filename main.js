//nazimau na paly, vivodit "vi nazali tuda-to" v consol
let play=document.querySelector("#play-song");
play.addEventListener("click",()=>{
    console.log("You pressed play")
});
let prev=document.querySelector("#prev-song");
prev.addEventListener("click",()=>{
console.log("You pressed prev-song")
});
let next=document.querySelector("#next-song");
next.addEventListener("click",()=>{
console.log("You pressed next-song")
});