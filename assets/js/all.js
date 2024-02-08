document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("click", off);
var started = false;

function randomSong() {
  var numba = Math.random();
  if (numba > 0.0 && numba < 0.33) {
    return (audio = new Audio("assets/audio/breakintheaction.mp3"));
  }
  if (numba > 0.34 && numba < 0.67) {
    return (audio = new Audio("assets/audio/islandinthesun.mp3"));
  }
  if (numba > 0.68 && numba < 1) {
    return (audio = new Audio("assets/audio/loversrock.mp3"));
  }
}

var audio = randomSong();

function off() {
  document.removeEventListener("click", off);
  document.getElementById("overlay").style.display = "none";
  document.getElementById("content").classList.remove("Blur");
  audio.volume = 0.05;
  play();
}

function play() {
  started = !started;
  if (started) {
    audio.play();
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("pausebutton").style.display = "block";
  } else {
    audio.pause();
    document.getElementById("playbutton").style.display = "block";
    document.getElementById("pausebutton").style.display = "none";
  }
}

let counter = 0;
let Title = "unarworld";
let direction = true;
aniTitle = setInterval(function () {
  if (counter == Title.length) direction = false;
  if (counter == false) direction = true;
  counter = direction == true ? ++counter : --counter;
  newtitle = counter == 0 ? "" : Title.slice(0, counter);
  document.title = "l" + newtitle;
}, 400);
