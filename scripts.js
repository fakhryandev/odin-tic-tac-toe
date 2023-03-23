const playerOne = newPlayer("player one", "x");
const playerTwo = newPlayer("player two", "o");

function newPlayer(name, marker) {
  return { name, marker };
}
