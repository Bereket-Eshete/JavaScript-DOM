//variable
let startStopBtn = document.getElementById("startStopBtn");
let restBtn = document.querySelector("#restBtn");
let seconds = 0;
let minutes = 0;
let hours = 0;
//variable for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
//variable
let timerInterval = null;
let timeStatus = "stopped";
//stop watch function
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingleadingHours = "0" + hours.toString();
  } else {
    leadingleadingHours = hours;
  }

  let timer = (document.getElementById("timer").textContent =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
  console.log(timer);
}
// window.setInterval(stopWatch, 1000);
startStopBtn.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class"fa-solid fa-play" id="play"></i>`;
    timeStatus = "stopped";
  }
});
restBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
