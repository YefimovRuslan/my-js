const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", showUserName);

function showUserName(event) {
  output.textContent = event.currentTarget.value;
}
