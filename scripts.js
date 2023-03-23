let activePlayer = 0;

const playerOne = newPlayer("player one", "x");
const playerTwo = newPlayer("player two", "o");

function newPlayer(name, marker) {
  return { name, marker };
}

let boxes = document.getElementsByClassName("box");

for (let index = 0; index < boxes.length; index++) {
  const element = boxes[index];
  element.addEventListener("click", markBox);
}

function markBox(e) {
  const click = e.target;
  activePlayer == 0
    ? (click.innerHTML += '<span class="o-mark">O</span>')
    : (click.innerHTML += '<span class="x-mark">X</span>');
  nextPlayer();
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}
