'use strict';

//Selcecting the element

const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting the condition\
let scores, currentScore, playerActive, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  playerActive = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden');
  document;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll dice functionality

btnRoll.addEventListener('click', function () {
  //1: Generation a random dice roll
  if (playing) {
    const rndom = Math.trunc(Math.random() * 6) + 1;
    console.log(rndom);

    // 2: Display dice
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${rndom}.png`;

    //3: Check for rolled 1: if true, switch to next player
    if (rndom !== 1) {
      currentScore = currentScore + rndom; //+=rndom
      document.getElementById(`current--${playerActive}`).textContent =
        currentScore;

      //Add dice to current score
      //Switch to next player
    } else {
      // current1.textContent = 0;
      // current0.textContent = 0;
      // current1.textContent = currentScore;
      switchPlayer();
    }
  }
});

//current value

//hold functionality

btnHold.addEventListener('click', function () {
  //1. Add current score playerscores
  scores[playerActive] += currentScore;
  // console.log(scores[playerActive]);

  //scores[0]=scores[0]+currentScore;
  document.getElementById(`score--${playerActive}`).textContent =
    scores[playerActive];

  if (scores[playerActive] >= 20) {
    if ((playing = false));
    document
      .querySelector(`.player--${playerActive}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${playerActive}`)
      .classList.remove('player--active');
  }
  //switch to the next player
  switchPlayer();
});

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
});

btnNew.addEventListener('click', init);
