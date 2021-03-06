let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Fuck Money",
    artist: "theonlyjayyb",
    image: "images/jayyb.jpg",
    path: "music/fuckmoney.wav"
  },
  {
    name: "Ocean Deep Thoughts",
    artist: "theonlyjayyb",
    image: "images/oceandeep.jpg",
    path: "music/OceanDeepThoughts.wav"
  },
  {
      name: "Sauce",
      artist: "theonlyjayyb ft. N8TE",
      image: "images/sauce2.jpeg",
      path: "music/sauce.mp3"
  },
//   {
//     name: "The Only",
//     artist: "theonlyjayyb",
//     image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
//     path: "music/TheOnly.wav",
//   },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
  console.log(track_name.textContent)
  if (track_name.textContent !== "Fuck Money") {
    document.getElementById('money').style.display = "none"

  } else {
    document.getElementById('money').style.display = ""
    document.getElementsByClassName('now-playing')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('track-name')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('track-artist')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('buttons')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('seek_slider')[0].style.background = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('volume_slider')[0].style.background = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('current-time')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('total-duration')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('fa fa-volume-down')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    document.getElementsByClassName('fa fa-volume-up')[0].style.color = 'rgb(' +0 +','+ 0 +','+ 0+')'
    
  }
  if (track_name.textContent !== "Ocean Deep Thoughts") {
    document.getElementById('ocean').style.display = "none"
    
  } else {
    document.getElementById('ocean').style.display = ""
    document.getElementsByClassName('now-playing')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('track-name')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('track-artist')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('buttons')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('seek_slider')[0].style.background = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('volume_slider')[0].style.background = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('current-time')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('total-duration')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('fa fa-volume-down')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
    document.getElementsByClassName('fa fa-volume-up')[0].style.color = 'rgb(' +255 +','+ 255 +','+ 255+')'
  }
  if (track_name.textContent !== "Sauce") {
    document.getElementById('drip').style.display = "none"
    // document.getElementsByClassName('now-playing').style.color = rgb(255, 255, 255)
  } else {
    document.getElementById('drip').style.display = ""
    document.getElementsByClassName('now-playing')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('track-name')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('track-artist')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('buttons')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('seek_slider')[0].style.background = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('volume_slider')[0].style.background = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('current-time')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('total-duration')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('fa fa-volume-down')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
    document.getElementsByClassName('fa fa-volume-up')[0].style.color = 'rgb(' +155 +','+ 155 +','+ 155+')'
  }
  

  

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
