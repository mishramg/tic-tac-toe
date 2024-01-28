
const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
 square.addEventListener('click', handleClick);
});

function handleClick(event) {
 const square = event.target;

 if (square.textContent !== '') {
  return;
 }

 square.textContent = currentPlayer;

 if (checkWin()) {
  alert(currentPlayer);
  resetBoard();
 } else if (checkTie()) {
  alert('Tie game!');
  resetBoard();
 } else {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 }
}

function checkWin() {
 const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];

 return winningCombos.some(combo => {
  return combo.every(index => {
   return squares[index].textContent === currentPlayer;
  });
 });
}

function checkTie() {
 return [...squares].every(square => {
  return square.textContent !== '';
 });
}

function resetBoard() {
 squares.forEach(square => {
  square.textContent = '';
 });
 currentPlayer = 'X';
}