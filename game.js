const game = document.querySelector('#game');
const target = document.querySelector('#target');
const message = document.querySelector('#message');
const startButton = document.querySelector('#start');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const bestEl = document.querySelector('#best');

let score = 0;
let timeLeft = 30;
let timerId;
let playing = false;
let isBomb = false;

const bestScoreKey = 'balon-patlat-best';
bestEl.textContent = localStorage.getItem(bestScoreKey) || '0';

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function moveTarget() {
  const gameRect = game.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const padding = targetRect.width / 2 + 10;

  target.style.left = `${randomBetween(padding, gameRect.width - padding)}px`;
  target.style.top = `${randomBetween(padding, gameRect.height - padding)}px`;
  isBomb = Math.random() < 0.18;
  target.textContent = isBomb ? '💣' : '🎈';
  target.classList.toggle('bomb', isBomb);
}

function updateScore(points) {
  score = Math.max(0, score + points);
  scoreEl.textContent = score;
}

function finishGame() {
  playing = false;
  clearInterval(timerId);
  target.style.display = 'none';

  const previousBest = Number(localStorage.getItem(bestScoreKey) || 0);
  if (score > previousBest) {
    localStorage.setItem(bestScoreKey, String(score));
    bestEl.textContent = score;
  }

  message.innerHTML = `
    <h1>Skor: ${score}</h1>
    <p>${score > previousBest ? 'Yeni rekor! ' : ''}Tekrar oynamak için butona dokun.</p>
    <button id="restart" type="button">Tekrar Başla</button>
  `;
  message.classList.remove('hidden');
  message.querySelector('button').addEventListener('click', startGame);
}

function tick() {
  timeLeft -= 1;
  timeEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    finishGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  playing = true;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  message.classList.add('hidden');
  target.style.display = 'flex';
  moveTarget();
  clearInterval(timerId);
  timerId = setInterval(tick, 1000);
}

function hitTarget(event) {
  event.preventDefault();
  if (!playing) return;

  target.classList.add('pop');
  setTimeout(() => target.classList.remove('pop'), 90);
  updateScore(isBomb ? -3 : 1);
  moveTarget();
}

startButton.addEventListener('click', startGame);
target.addEventListener('pointerdown', hitTarget);
target.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    hitTarget(event);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
