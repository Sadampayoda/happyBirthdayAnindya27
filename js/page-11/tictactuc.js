// JavaScript
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = 'O';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameover = false;

function checkWin(player) {
  return WINNING_COMBOS.some(combo => {
    return combo.every(index => boardState[index] === player);
  });
}

function checkDraw() {
  return boardState.every(cell => cell !== '');
}

function endGame(winner) {
    gameover = true;
    setTimeout(() => {
      if (winner) {
        // Tampilkan modal kemenangan jika ada pemenang
        $('#winModal').modal('show');
      } else {
        // Tampilkan modal seri jika tidak ada pemenang
        alert('Permainan Berakhir dengan Seri!');
        resetGame();
      }
    }, 100);
  }
  
  
  
  

function makeMove(index) {
  if (boardState[index] !== '' || gameover) return;

  boardState[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    endGame(currentPlayer);
    return;
  }

  if (checkDraw()) {
    endGame(null);
    return;
  }

  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  if (currentPlayer === 'X') {
    computerMove();
  }
}

function computerMove() {
  let availableMoves = boardState.reduce((acc, cell, index) => {
    if (cell === '') acc.push(index);
    return acc;
  }, []);

  if (availableMoves.length === 0) return;

  let randomIndex = Math.floor(Math.random() * availableMoves.length);
  makeMove(availableMoves[randomIndex]);
}

function resetGame() {
  currentPlayer = 'O';
  boardState = ['', '', '', '', '', '', '', '', ''];
  gameover = false;
  cells.forEach(cell => (cell.textContent = ''));
}
