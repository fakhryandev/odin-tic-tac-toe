const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [0, 4, 8],
];

const playerBoard = new Array(9);

let remainingSpots = 9;

const playerOne = newPlayer("Player 1", "X");
const playerTwo = newPlayer("Player 2", "O");

let activePlayer = playerOne;

function newPlayer(name, marker) {
  return { name, marker };
}

let boxes = document.getElementsByClassName("box");

for (let index = 0; index < boxes.length; index++) {
  const element = boxes[index];
  element.addEventListener("click", function (e) {
    boxEvent(e, index);
  });
}

const playerNameDisplay = document.querySelector(".player-name");

function boxEvent(e, index) {
  if (!e.target.children.length) {
    markBox(e);

    playerBoard[index] = activePlayer.marker;

    checkWinner();
    remainingSpots -= 1;
    if (remainingSpots > 0) {
      nextPlayer();
      playerNameDisplay.textContent = `${activePlayer.name}`;
    } else {
      declareTie();
    }
  }
}

function markBox(e) {
  const click = e.target;
  const markerClass = `${activePlayer.marker.toLowerCase()}-mark`;
  click.innerHTML += `<span class=${markerClass}>${activePlayer.marker}</span>`;
  click.style.cursor = "default";
}

function nextPlayer() {
  activePlayer === playerOne
    ? (activePlayer = playerTwo)
    : (activePlayer = playerOne);
}

function checkWinner() {
  winPattern.forEach((item, index) => {
    if (
      playerBoard[item[0]] === activePlayer.marker &&
      playerBoard[item[1]] === activePlayer.marker &&
      playerBoard[item[2]] === activePlayer.marker
    ) {
      console.log("winner");
    }
  });
}

function declareTie() {
  console.log("It's a tie");
}
