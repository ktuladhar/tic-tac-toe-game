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

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("reset-btn");
const playerXCard = document.getElementById("player-x-card");
const playerOCard = document.getElementById("player-o-card");
const cells = Array.from(boardEl.querySelectorAll(".cell"));

let board = Array(9).fill(null);
let currentPlayer = "X";
let gameActive = true;

function updateStatus(message, className = "") {
  statusEl.textContent = message;
  statusEl.className = "status";
  if (className) {
    statusEl.classList.add(className);
  }
}

function updateActivePlayer() {
  playerXCard.classList.toggle("active", currentPlayer === "X" && gameActive);
  playerOCard.classList.toggle("active", currentPlayer === "O" && gameActive);
}

function checkWinner() {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo: [a, b, c] };
    }
  }
  return null;
}

function isDraw() {
  return board.every((cell) => cell !== null);
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Number(cell.dataset.index);

  if (!gameActive || board[index] !== null) {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken", currentPlayer.toLowerCase());
  cell.setAttribute("aria-label", `Cell ${index + 1}, ${currentPlayer}`);
  cell.disabled = true;

  const result = checkWinner();
  if (result) {
    gameActive = false;
    result.combo.forEach((i) => cells[i].classList.add("winning"));
    updateStatus(`Player ${result.winner} wins!`, `winner-${result.winner.toLowerCase()}`);
    updateActivePlayer();
    return;
  }

  if (isDraw()) {
    gameActive = false;
    updateStatus("It's a draw!", "draw");
    updateActivePlayer();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Player ${currentPlayer}'s turn`);
  updateActivePlayer();
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  gameActive = true;

  cells.forEach((cell, index) => {
    cell.textContent = "";
    cell.className = "cell";
    cell.disabled = false;
    cell.setAttribute("aria-label", `Cell ${index + 1}, empty`);
  });

  updateStatus("Player X's turn");
  updateActivePlayer();
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);

updateActivePlayer();
