let elapsed = 0;
var interval;
let timerDisplay = document.getElementById("time");

function start() {
  let startTime = Date.now() - elapsed;
  interval = setInterval(() => {
    elapsed = Date.now() - startTime;
    displayTime(elapsed);
  }, 10);
  displayButton("Stop");
  console.log("start Button has been pressed");
}

function pause() {
  clearInterval(interval);
  displayButton("start");
  console.log("Pause Button has been pressed");
}

function reset() {
  clearInterval(interval);
  elapsed = 0;
  displayTime(0);
  displayButton("start");
  console.log("Reset Button has been pressed");
}
//display the time

function displayButton(buttonType) {
  let show = buttonType == "start" ? startButton : pauseButton;
  let hide = buttonType == "start" ? pauseButton : startButton;
  show.style.display = "inline-block";
  hide.style.display = "none";
}

function displayTime(time) {
  let milliseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / 60000) % 60;
  let hours = Math.floor(time / 3600000) % 60;

  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  timerDisplay.innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
