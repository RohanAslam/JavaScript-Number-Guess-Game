'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.highscore').textContent = highscore;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
  'click',

  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
      displayMessage('Not a Number');
      //
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        'Good Job! That was the correct number';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        self.document.querySelector('.highscore').textContent = score;
      }
      //
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Damn, you lost..');
        document.querySelector('.score').textContent = 0;
      }
      //
    }
  }
);
document.querySelector('.again').addEventListener(
  'click',

  function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
);
