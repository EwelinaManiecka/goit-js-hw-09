// funkcja z treści zadania

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

function changeColor() {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
startBtn.setAttribute("disabled", "disabled");
stopBtn.removeAttribute("disabled");
};

function stopColor() {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", "disabled");
};

startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener("click", stopColor);





//działa zablokowanie buttonów
// const refs = {
//     body: document.querySelector('body'),
//     startBtn: document.querySelector('button[data-start]'),
//     stopBtn: document.querySelector('button[data-stop]'),
//   };
  
//   refs.startBtn.addEventListener('click', starthangeBodyColor);
//   refs.stopBtn.addEventListener('click', stopedChangeBodyColor);
//   refs.stopBtn.setAttribute('disabled', 'disabled');
//   let timerId = null;
  
//   function starthangeBodyColor() {
//     refs.startBtn.setAttribute('disabled', 'disabled');
//     refs.stopBtn.removeAttribute('disabled', 'disabled');
//     timerId = setInterval(() => {
//       refs.body.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//   }
  
//   function stopedChangeBodyColor() {
//     clearInterval(timerId);
//     refs.startBtn.removeAttribute('disabled', 'disabled');
//     refs.stopBtn.setAttribute('disabled', 'disabled');
//   }
  
//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }