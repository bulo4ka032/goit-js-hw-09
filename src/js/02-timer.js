import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//const flatpickr = require('flatpickr');

//const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
//const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
startBtn.addEventListener('click', onTimerStart);
let timerId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = new Date();
    if (selectedDates[0] - currentDate < 0) {
      Notify.failure('Please choose a date in the future', {
        timeout: 5000,
        width: 300,
      });
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function padStartFunc(value) {
  return String(value).padStart(2, 0);
}

function timeCounter({ days, hours, minutes, seconds }) {
  dataDays.textContent = padStartFunc(days);
  dataHours.textContent = padStartFunc(hours);
  dataMinutes.textContent = padStartFunc(minutes);
  dataSeconds.textContent = padStartFunc(seconds);
}

function onTimerStart() {
  timerId = setInterval(() => {
    const durationDate = new Date();
    const dateCounter = fp.selectedDates[0] - durationDate;
    startBtn.disabled = true;

    if (dateCounter < 0) {
      clearInterval(timerId);
      return;
    }
    timeCounter(convertMs(dateCounter));
  }, 1_000);
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const fp = flatpickr('#datetime-picker', options);
