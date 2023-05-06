const inputAmount = document.querySelector("input");
const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
const boxGenerator = document.querySelector("#boxes");

createBoxesBtn.addEventListener("click", onCreateBox);
destroyBoxesBtn.addEventListener("click", onDestroyBox);

function onCreateBox(event) {
  let numberOfBoxes = Number(inputAmount.value);
  let markupOfBoxes = "";
  let lastBox = boxGenerator.lastElementChild;
  let sizeOfBox = 0;

  if (lastBox === null) {
    sizeOfBox = 30;
  } else {
    sizeOfBox = Number(lastBox.style.width.replace("px", "")) + 10;
  }

  for (let i = 1; i <= numberOfBoxes; i += 1) {
    let colorOfBox = getRandomHexColor();
    let box = `<div style='
    margin: 5px;
    width: ${sizeOfBox}px; 
    height: ${sizeOfBox}px; 
    border: 1px solid black; 
    background-color: ${colorOfBox}'>
    </div>`;
    markupOfBoxes += box;
    sizeOfBox += 10;
  }

  boxGenerator.insertAdjacentHTML("beforeend", markupOfBoxes);
}

function onDestroyBox(event) {
  boxGenerator.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
