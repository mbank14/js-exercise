const btn = document.querySelector(".switch");
const video = document.querySelector(".v-container");

btn.addEventListener('click', function () {
    if (!btn.classList.contains("play")) {
        btn.classList.add("play");
        btn.textContent = "Play";
        video.play();
        console.log("gas");
    }else{
        btn.classList.remove("play");
        video.pause();
        console.log("pause");
    }
})