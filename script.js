const audio = document.getElementById("audio");
const backgroundButton = document.getElementById("backgroundButton");
const quoteContainer = document.getElementById("quoteContainer");
const quote = document.getElementById("quote");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audioPlayer = document.getElementById("audioPlayer");
const currentTrack = document.getElementById("currentTrack");

const quotes = [
    // ... (restante do array de citações) ...
];

backgroundButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});

audioPlayer.addEventListener("play", () => {
    currentTrack.textContent = "Sua Música Personalizada";
});

audioPlayer.addEventListener("pause", () => {
    currentTrack.textContent = "Música Pausada";
});

playButton.addEventListener("click", () => {
    audioPlayer.play();
    currentTrack.textContent = "Sua Música Personalizada";
});

pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
    currentTrack.textContent = "Música Pausada";
});

document.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
