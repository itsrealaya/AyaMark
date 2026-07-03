/* ==========================================
   AyaMark v1.0
   Music Player
========================================== */

const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progressBar");

const playlist = [
    "assets/music/songs/song1.mp3",
    "assets/music/songs/song2.mp3",
    "assets/music/songs/song3.mp3"
];

let current = 0;
let playing = false;

function loadSong(index){

    audio.src = playlist[index];

}

function playSong(){

    audio.play();

    playing = true;

    playBtn.innerHTML = "⏸";

}

function pauseSong(){

    audio.pause();

    playing = false;

    playBtn.innerHTML = "▶";

}

playBtn.addEventListener("click",()=>{

    if(playing){

        pauseSong();

    }else{

        playSong();

    }

});

nextBtn.addEventListener("click",()=>{

    current++;

    if(current>=playlist.length){

        current=0;

    }

    loadSong(current);

    playSong();

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=playlist.length-1;

    }

    loadSong(current);

    playSong();

});

audio.addEventListener("timeupdate",()=>{

    const percent =

    (audio.currentTime/audio.duration)*100;

    progress.style.width = percent+"%";

});

audio.addEventListener("ended",()=>{

    nextBtn.click();

});

loadSong(current);
