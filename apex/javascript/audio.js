function playback(file) {
    let audio = document.getElementsByTagName("audio")[0];
    audio.pause();

    audio.src = file;
    audio.play();
};