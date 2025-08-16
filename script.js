/* Selecting Elements*/
const innerCircle = document.querySelector('.ineer-circle');
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const lapButton = document.getElementById("lapButton");
const lapsList = document.getElementById("laps");
const clearLapsButton = document.querySelector(".laps-clear-button");
const bg = document.getElementById('.outer-circle');

const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");
const millisecondsElem = document.querySelector(".miliseconds");

let hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

let timer = null;
let isRunning = false;

/* Start Timer*/
function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

/* Update Stopwatch Display*/
function updateDisplay() {
    hoursElem.textContent = `${hours.toString().padStart(2, "0")} :`;
    minutesElem.textContent = ` ${minutes.toString().padStart(2, "0")} :`;
    secondsElem.textContent = ` ${seconds.toString().padStart(2, "0")} :`;
    millisecondsElem.textContent = ` ${milliseconds.toString().padStart(3, "0")}`;
}

/* Play Button*/
playButton.addEventListener("click", () => {
    if (!isRunning) {
        startTimer();
        isRunning = true;
        playButton.hidden = true;
        pauseButton.hidden = false;
        resetButton.hidden = false;
        lapButton.hidden = false;
        clearLapsButton.hidden = false;
    }
});

/* Pause Button*/
pauseButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    playButton.hidden = false;
    pauseButton.hidden = true;
});

/* Reset Button*/
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = "";
    playButton.hidden = false;
    pauseButton.hidden = true;
    resetButton.hidden = true;
    lapButton.hidden = true;
    clearLapsButton.hidden = true;
});

/* Lap Button*/
lapButton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `${hours.toString().padStart(2, "0")} : ${minutes
        .toString()
        .padStart(2, "0")} : ${seconds
        .toString()
        .padStart(2, "0")} : ${milliseconds.toString().padStart(3, "0")}`;
    lapsList.appendChild(li);
});

/* Clear All Laps*/
clearLapsButton.addEventListener("click", () => {
    lapsList.innerHTML = "";
});
