const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
