const keys =document.querySelectorAll(".key");

const whitekey = document.querySelectorAll(".key.white");
const blackkey = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
    playKey(this);
}

function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.currentTime = 0;
    keyAudio.play();
    key.classList.add("active");
    keyAudio.addEventListener("ended",()=>{
        key.classList.remove("active");
    });
}