const bodyColor = document.querySelector("body");
const colorDisplay = document.querySelector(".color");
const toggleColorBtn = document.querySelector(".change-color");

toggleColorBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const newColor = getRandomHexColor();
  colorDisplay.textContent = newColor;
  bodyColor.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
