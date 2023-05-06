const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

decrementButton.addEventListener("click", decreasValue);
incrementButton.addEventListener("click", increasValue);

let counterValue = 0;

function decreasValue(event) {
  value -= 1;
  counter.textContent = counterValue;
}

function increasValue(event) {
  value += 1;
  counter.textContent = counterValue;
}
