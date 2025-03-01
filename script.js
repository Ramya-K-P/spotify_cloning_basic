console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let myProgressBar = document.getElementById('myProgressBar');
const masterPlay = document.getElementById('masterPlay'); // Correct ID
const gif = document.getElementById('gif'); // Define gif properly
const audioElement = new Audio('songs/1.mp3'); // Ensure correct path
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Gardens - Stylish Chill", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "alone", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Spinning Head", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Lost in Dreams", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Stylish Deep Electronic", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Showreel Music", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Tell Me The Truth", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Soulsweeper", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Night Detective", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "AMALGAM", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"}
];
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath; 
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


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
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
Array.from(document.getElementsByClassName('timestamp')).forEach((element)=>{
    document.addEventListener('click',(e)=>{
        console.log(e.target);
        // e.target.
    })
})

