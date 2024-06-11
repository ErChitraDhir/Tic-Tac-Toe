const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameIsActive = true;
//code 
function handleCellClick(event) {
  const cellIndex = parseInt(event.target.dataset.cellIndex);
  const cell = cells[cellIndex];

  if (cell.textContent !== '' || !gameIsActive) return;

  cell.textContent = currentPlayer;
  checkWinner();
  switchPlayer();

  if (isBoardFull() && !checkWinner()) {
    message.textContent = "It's a tie!";
    gameIsActive = false;
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winningConditions) {
    const cell1 = cells[condition[0]];
    const cell2 = cells[condition[1]];
    const cell3 = cells[condition[2]];

    if (cell1.textContent === currentPlayer && cell2.textContent === currentPlayer && cell3.textContent === currentPlayer) {
      message.textContent = `Player ${currentPlayer} Wins!`;
      gameIsActive = false;
      return;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = `Player ${currentPlayer}'s turn`;
}

function isBoardFull() {
  return cells.every(cell => cell.textContent !== '');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
