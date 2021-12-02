'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentscore = 0;
let activeplayer = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generate a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //check for rolled 1 if true switch to next player
  if (dice != 1) {
    //add dice to the current score
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    //switch to next player
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
