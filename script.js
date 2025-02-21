console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let myProgressBar = document.getElementById('myProgressBar');
const masterPlay = document.getElementById('masterPlay'); // Correct ID
const gif = document.getElementById('gif'); // Define gif properly
const audioElement = new Audio('songs/1.mp3'); // Ensure correct path

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"}
];

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5H10V19H6V5ZM14 5H18V19H14V5Z" fill="black" />
                                </svg>`; // Pause icon
        gif.style.opacity = 1; // Show gif when playing
    } else {
        audioElement.pause();
        masterPlay.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="black" />
                                </svg>`; // Play icon
        gif.style.opacity = 0; // Hide gif when paused
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
});
