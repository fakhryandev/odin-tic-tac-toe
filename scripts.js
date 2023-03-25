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

let playerName = document.querySelector(".player-name");

function markBox(e) {
  const click = e.target;
  if (activePlayer == 0) {
    click.innerHTML += '<span class="o-mark">O</span>';
    playerName.textContent = "Player 2";
  } else {
    click.innerHTML += '<span class="x-mark">X</span>';
    playerName.textContent = "Player 1";
  }
  nextPlayer();
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}
