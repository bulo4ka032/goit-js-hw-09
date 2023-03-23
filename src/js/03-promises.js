import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
form.addEventListener('submit', onCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);

        // Fulfill
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);

        // Reject
      }
    }, delay);
  });
}

function onCreatePromise(evt) {
  evt.preventDefault();
  // const formData = new FormData(evt.currentTarget);
  // const dataParams = {};
  const delay = +form.delay.value;
  const step = +form.step.value;
  const amount = +form.amount.value;
  for (let i = 1; i <= amount; i += 1) {
    const newDelay = delay + step * (i - 1);
    //console.log(delay, step, amount);
    console.log(newDelay);
    createPromise(i, newDelay)
      .then(value => Notify.success(value))
      .catch(error => Notify.failure(error));
  }
}

// createPromise(2, 1500)
// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });
