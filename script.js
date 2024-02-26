'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

// number.textContent = `${math.floor(math.random)}`;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = document.querySelector('.guess').value;

  //   for no input
  if (!inputNumber) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }

  //   for input equals secret number
  else if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number👌';
    score += 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //   for input greater than secret number
  else if (inputNumber > secretNumber) {
    // check for score greater than zero
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }

  //   for input less than secret number
  else if (inputNumber < secretNumber) {
    // check for score greater than zero
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }

  // check for score equals zero
  if (score == 0) {
    document.querySelector('.message').textContent = 'You Lost 😫';
    //   score -= 1;
    //   document.querySelector('.score').value.textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
