const input = document.querySelector("#validation-input");

input.addEventListener("blur", chechSymbolsQuantity);

function chechSymbolsQuantity(event) {
  if (input.dataset.length === String(event.currentTarget.value.length)) {
    input.classList = "";
    input.classList.add("validation-input--valid");
  } else {
    input.classList = "";
    input.classList.add("validation-input--invalid");
  }
}
