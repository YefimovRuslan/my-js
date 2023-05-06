const inputControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  const fontSize = event.currentTarget.value;
  textElement.style.fontSize = fontSize + "px";
}
