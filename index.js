let homeScore = document.getElementById('home-score');
let awayScore = document.getElementById('away-score');
let homeAdd1 = document.getElementById('home-add-1');
let homeAdd2 = document.getElementById('home-add-2');
let homeAdd3 = document.getElementById('home-add-3');

let awayAdd1 = document.getElementById('away-add-1');
let awayAdd2 = document.getElementById('away-add-2');
let awayAdd3 = document.getElementById('away-add-3');

let resetBtn = document.getElementById('reset-btn');

let homeCount = 0;
let awayCount = 0;

homeScore.textContent = homeCount;
awayScore.textContent = awayCount;

homeAdd1.addEventListener('click', () => {
  homeCount += 1;
  homeScore.textContent = homeCount;
});

homeAdd2.addEventListener('click', () => {
  homeCount += 2;
  homeScore.textContent = homeCount;
});

homeAdd3.addEventListener('click', () => {
  homeCount += 3;
  homeScore.textContent = homeCount;
});

awayAdd1.addEventListener('click', () => {
  awayCount += 1;
  awayScore.textContent = awayCount;
});

awayAdd2.addEventListener('click', () => {
  awayCount += 2;
  awayScore.textContent = awayCount;
});

awayAdd3.addEventListener('click', () => {
  awayCount += 3;
  awayScore.textContent = awayCount;
});

resetBtn.addEventListener('click', () => {
  homeCount = 0;
  awayCount = 0;
  homeScore.textContent = homeCount;
  awayScore.textContent = awayCount;
});

console.log(homeScore);
console.log(awayScore);
