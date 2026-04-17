console.log("lets write JAVAScript");
let currentSong = new Audio();
let currentTrack = ""
let songs;
let currfolder;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getsongs(folder) {
    currfolder = folder
    let a = await fetch(`http://127.0.0.1:3000/Songs/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index]
        if (element.href.endsWith(".mp3")) {
            let song = element.href

            song = decodeURIComponent(song)
            song = song.split("\\").pop()
            song = song.split("/").pop()

            songs.push(song)
        }
    }

    // show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="img/Music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Song Artist</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img src="img/play.svg" alt="" class="invert">
                            </div></li>`;
    }
    //attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e, i) => {
        e.addEventListener("click", () => {
            playMusic(songs[i])
        })
    })

    return songs;
}
const playMusic = (track, pause = false) => {
    if (!track) return

    currentTrack = track
    currentSong.src = `/Songs/${currfolder}/` + track;

    if (!pause) {
        currentSong.play();
        play.src = "img/pause.svg"
    }

    document.querySelector(".songtext").innerHTML = track.replaceAll("%20", " ")

}

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`http://127.0.0.1:3000/Songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

                if (e.href.includes("/Songs") && !e.href.includes(".htaccess")) { // Before if (e.href.includes("/Songs")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/Songs/${folder}/info.json`) // Before = let a = await fetch(`http://127.0.0.1:3000/Songs/${folder}/info.json`)
            let data = await a.json(); 
            cardContainer.innerHTML += `
                    <div data-folder="${folder}" class="card"> 
                        <div class="play">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>
                        <img src="/Songs/${folder}/cover.jpg">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
            </div>
            `
        }
    }
    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            let folder = e.dataset.folder  // ya line chatGPT na likhvai ha glt ho skti ha😂
            console.log("Fetching Songs")
            songs = await getsongs(folder)
            playMusic(songs[0])

        })
    })
}

async function main() {
    await getsongs("ncs");
    if (songs.length > 0) {
        playMusic(songs[0], true)
    }

    //Display all the albums on the page
    await displayAlbums();

    //attach an event lisner to next, previous and play song
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play.svg"
        }
    })

    // listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // add an event listner to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100

    })

    // add n event lintner for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })
    // add n event lintner for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })
    // Previous
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let currentFile = decodeURIComponent(currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(currentFile)
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })
    // Next
    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked")

        let currentFile = decodeURIComponent(currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(currentFile)
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })
    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume > 0) {
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("img/mute.svg", "img/volume.svg")
        }
    })

    //Add eventliner to mute the track
    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("img/volume.svg")) {
            e.target.src = e.target.src.replace("img/volume.svg", "img/Mute.svg")
            currentSong.volume = 0
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0
        }
        else {
            e.target.src = e.target.src.replace("img/Mute.svg", "img/volume.svg")
            currentSong.volume = 1
            document.querySelector(".range").getElementsByTagName("input")[0].value = 100
            
        }
    })
    // user jb range pr click kra ga to aytomatically mute.svg volume.svg ma change ho jy ge
    document.querySelector(".range input").addEventListener("input", (e) => {
    currentSong.volume = e.target.value / 100

    if (e.target.value == 0) {
        document.querySelector(".volume>img").src = "img/Mute.svg"
    } else {
        document.querySelector(".volume>img").src = "img/volume.svg"
    }
})



}

main();

