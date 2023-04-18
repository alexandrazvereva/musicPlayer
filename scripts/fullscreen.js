const fullScreenIcon = document.querySelector(".fullscreen-icon");
fullScreenIcon.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullScreenIcon.classList.add("fullscreen-active");
        fullScreenIcon.setAttribute("title", "exit fullscreen mode")
    } else {
        document.exitFullscreen();
        fullScreenIcon.classList.remove("fullscreen-active");
        fullScreenIcon.setAttribute("title", "enter exit fullscreen mode")

    }
})