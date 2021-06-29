const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
  

const songs=[
    {
        name:"N1",
        title:"Faded",
        artist:"The Chainsmokers",
    },
    {
        name:"N2",
        title:"Closer",
        artist:"Halsey",
    },
    {
        name:"N3",
        title:"Goosebumps",
        artist:"Travis Scott",
    },
]

let isPlaying=false;
const playMusic = ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};

const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
    obj.style.background="white";
};

play.addEventListener("click",()=>{
    if(isPlaying)
        pauseMusic();
    else
        playMusic();
});

const loadsong = (songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=songs.name+".mp3";
};

// loadsong(songs[2]);
songIndex=0;
const nextsong = () => {
    songIndex=(songIndex+1)%3;
    loadsong(songs[songIndex]);
    playMusic();
};

const prevsong = () => {
    songIndex=(songIndex-1+3)%3;
    loadsong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);

