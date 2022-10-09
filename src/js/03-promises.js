import Notiflix from "notiflix";

const form = document.querySelector("form");
form.addEventListener("submit", onClick);

function onClick(event) {
  event.preventDefault();

  const delayValue = Number(event.currentTarget.elements.delay.value);
  const stepValue = Number(event.currentTarget.elements.step.value);
  const amountValue = Number(event.currentTarget.elements.amount.value);

  for (let i = 0; i < amountValue; i++) {
    const stepDelay = i * stepValue + delayValue;
    createPromise(i + 1, stepDelay);
  }
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
    // Fulfill
  } else {
    reject({position, delay});
    // Reject
  }
}, delay);
  });

  promise
  .then(({position, delay}) => { 
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });