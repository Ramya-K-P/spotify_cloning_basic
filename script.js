console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let myProgressBar = document.getElementById('myProgressBar');
const masterPlay = document.getElementById('masterPlay');
const gif = document.getElementById('gif');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const bottomText = document.querySelector(".bottom_text");

let audioElement = new Audio(); // Empty audio element to change dynamically

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Gardens - Stylish Chill", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    { songName: "alone", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    { songName: "Spinning Head", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Lost in Dreams", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
    { songName: "Stylish Deep Electronic", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" },
    { songName: "Showreel Music", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg" },
    { songName: "Tell Me The Truth", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },
    { songName: "Soulsweeper", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg" },
    { songName: "Night Detective", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg" },
    { songName: "AMALGAM", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg" }
];

// Load song metadata and update UI
function loadSong(index) {
    audioElement.src = songs[index].filePath;
    bottomText.innerText = songs[index].songName;
    audioElement.play();
    masterPlay.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 5H10V19H6V5ZM14 5H18V19H14V5Z" fill="black" />
                            </svg>`; // Pause icon
    gif.style.opacity = 1;
}

// Set durations dynamically
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

    let audio = new Audio(songs[i].filePath);
    audio.addEventListener("loadedmetadata", () => {
        let minutes = Math.floor(audio.duration / 60);
        let seconds = Math.floor(audio.duration % 60);
        element.getElementsByClassName('timestamp')[0].innerText = 
            `${minutes}:${seconds < 10 ? '0' + seconds : seconds} >>>`;
    });
});

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5H10V19H6V5ZM14 5H18V19H14V5Z" fill="black" />
                                </svg>`; // Pause icon
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="black" />
                                </svg>`; // Play icon
        gif.style.opacity = 0;
    }
});

// Update Seek Bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek Bar Change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Play song on click
Array.from(document.getElementsByClassName('timestamp')).forEach((element, index) => {
    element.addEventListener('click', () => {
        songIndex = index;
        loadSong(songIndex);
    });
});

// Forward Button - Play Next Song
forward.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to first song if at last song
    loadSong(songIndex);
});

// Backward Button - Play Previous Song
backward.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop back to last song if at first song
    loadSong(songIndex);
});
