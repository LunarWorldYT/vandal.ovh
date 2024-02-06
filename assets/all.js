document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

function randomSong() {
    return audio = new Audio("assets/loversrock.mp3");
}
var audio = randomSong();

function play() {
	started = !started;
	if (started) {
		audio.volume = 0.1;
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
let Title = 'telle'; 
let direction = true;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "" : Title.slice(0, counter);
    document.title =  's' + newtitle;
}, 400)