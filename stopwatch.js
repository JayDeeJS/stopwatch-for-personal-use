let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const appendMilliseconds = document.querySelector('#milliseconds');
const appendSeconds = document.querySelector('#seconds');
const appendMinutes = document.querySelector('#minutes');
const appendHours = document.querySelector('#hours');
const buttonStart = document.querySelector('#btn-start');
const buttonStop = document.querySelector('#btn-stop');
const buttonReset = document.querySelector('#btn-reset');
let interval;

function countdown () {
    milliseconds++;
    appendMilliseconds.innerHTML = milliseconds
    if(milliseconds === 59) {
        seconds++;
        appendSeconds.innerHTML = seconds;
        milliseconds = 0;
        appendMilliseconds.innerHTML = milliseconds;
    }
    if(seconds === 59) {
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
        appendSeconds.innerHTML = seconds;
        milliseconds++;
        appendMilliseconds.innerHTML = milliseconds
    }
    if(minutes === 59) {
        hours++;
        appendHours.innerHTML = hours;
        minutes = 0;
        appendMinutes.innerHTML = minutes;
        seconds++;
        appendSeconds.innerHTML = seconds;
        milliseconds++;
        appendMilliseconds.innerHTML = milliseconds
    }
}

buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(countdown, 20);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    appendMilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
}