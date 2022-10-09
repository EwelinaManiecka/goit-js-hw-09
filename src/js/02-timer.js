// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedTime = selectedDates[0];
      const currentTime = Date.now();

      if (currentTime >= selectedTime) {
        // startBtn.disabled = true;
        Notiflix.Notify.failure("Wybierz datę z przyszłości");
      } else {
        startBtn.disabled = false;
        Notify.success("Wybrana została poprawna data")
      }
      // console.log(selectedDates[0]);
    },
  };

  // function convertMs(ms) {
  //   // Number of milliseconds per unit of time
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  
  //   // Remaining days
  //   const days = Math.floor(ms / day);
  //   // Remaining hours
  //   const hours = Math.floor((ms % day) / hour);
  //   // Remaining minutes
  //   const minutes = Math.floor(((ms % day) % hour) / minute);
  //   // Remaining seconds
  //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  //   // days.textContent = days < 10 ? addLeadingZero(String(days)) : days;
  //   // hours.textContent = hours < 10 ? addLeadingZero(String(hours)) : hours;
  //   // minutes.textContent = minutes < 10 ? addLeadingZero(String(minutes)) : minutes;
  //   // seconds.textContent = minutes < 10 ? addLeadingZero(String(seconds)) : seconds; 

  //   return { days, hours, minutes, seconds };
  // };

  const callendar = document.querySelector("#datetime-picker");
  const startBtn = document.querySelector("[data-start]");
  const days = document.querySelector("[data-days]");
  const hours = document.querySelector("[data-hours]");
  const minutes = document.querySelector("[data-minutes]");
  const seconds = document.querySelector("[data-seconds]");

  startBtn.disabled = true;

flatpickr("#datetime-picker", options);

const callendars = callendar._flatpickr;

class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    if (this.isActive) {
      Notify.info("Odliczam");
      return;
    }
    const selectedTime = callendars.selectedDates[0].getTime();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      const convertedTime = this.convertMs(deltaTime);
      this.onTick(convertedTime);
      if (deltaTime <= 0) {
        this.stop();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const convertedTime = this.convertMs(0);
    this.onTick(convertedTime);
    Notify.info("Odliczanie zakończone");
  }

  convertMs(ms) {
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
  
    // days.textContent = days < 10 ? addLeadingZero(String(days)) : days;
    // hours.textContent = hours < 10 ? addLeadingZero(String(hours)) : hours;
    // minutes.textContent = minutes < 10 ? addLeadingZero(String(minutes)) : minutes;
    // seconds.textContent = minutes < 10 ? addLeadingZero(String(seconds)) : seconds; 

    return { days, hours, minutes, seconds };
  };
  
  addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({onTick: updateClock});

startBtn.addEventListener("click", onClickTimerStart);

function onClickTimerStart() {
  timer.start();
};

function updateClock(value) {
  days.innerHTML = value.days;
  hours.innerHTML = value.hours;
  minutes.innerHTML = value.minutes;
  seconds.innerHTML = value.seconds;
};







