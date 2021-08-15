const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const main_div=document.querySelector(".main_div");
const progress=document.querySelector(".progress");
const curr_time=document.querySelector("#current_time");
const dur_time=document.querySelector("#duration");
const progress_div=document.querySelector('.progress_div');

const songs=[
    {
        name:"S1",
        title:"The Witcher theme",
        artist:"Sonya & Giona",
        poster:"P1",
    },
    {
        name:"S2",
        title:"Lucifer Theme",
        artist:"Heavy Young Heathens",
        poster:"P2",
    },
    {
        name:"S3",
        title:"Take On the world",
        artist:"You me at six",
        poster:"P3",
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
    music.src="./Songs/"+songs.name+".mp3";
    main_div.style.background=`url("./Images/${songs.poster}.jpg")`;
    main_div.style.backgroundRepeat="no-repeat";
    main_div.style.backgroundPosition="center";
    main_div.style.backgroundSize="cover";
};


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


music.addEventListener('timeupdate',(event)=>{
    // console.log(event);
    let {currentTime, duration} = event.srcElement;
    
    let progress_time=(currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;

    let r1=Math.floor(duration/60);
    let r2=Math.floor(duration%60);
    
    let l1=Math.floor(currentTime/60);
    let l2=Math.floor(currentTime%60);

    if(duration)
    {
        if(l2<10)
            l2='0'+l2;
        if(r2<10)
            r2='0'+r2;
        curr_time.innerText=l1+":"+l2;
        dur_time.innerText=r1+":"+r2;
    }

});

progress_div.addEventListener('click',(event)=>{

    // console.log(event);
    let move_progress=(event.offsetX/progress_div.clientWidth);
    let duration = music.duration;
    
    music.currentTime=move_progress*duration;
});

next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);
music.addEventListener("ended",nextsong);
