document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    // Log message
    console.log("Welcome to Nir Avrahami's Resume Page!");

    audio.play()
    .then(() => {
        console.log("Audio playback started automatically.");
    })


    // Add audio controls to allow users to pause/resume
    const toggleAudio = () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    const audioButton = document.createElement("button");
    audioButton.innerHTML = "Toggle Music<br>(Generated with SONA AI)";

    audioButton.style.position = "fixed";
    audioButton.style.bottom = "20px";
    audioButton.style.right = "20px";
    audioButton.style.padding = "10px 15px";
    audioButton.style.background = "#4CAF50";
    audioButton.style.color = "white";
    audioButton.style.border = "none";
    audioButton.style.borderRadius = "5px";
    audioButton.style.cursor = "pointer";


    audioButton.addEventListener("click", toggleAudio);
    document.body.appendChild(audioButton);
});



