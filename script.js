let resultText = '';
let playerScore = 0;
let computerScore = 0;

function displayResult() {
  let resultDiv = document.querySelector('div.result');

  if (resultDiv == null) {
    resultDiv = document.createElement('div');

    let resultH2 = document.createElement('h2');
    resultH2.textContent = 'You vs Computer';
    resultDiv.appendChild(resultH2);

    let resultH3 = document.createElement('h3');
    resultH3.textContent = `${playerScore} : ${computerScore}`;
    resultDiv.appendChild(resultH3);

    resultDiv.setAttribute('class', 'result');
    document.querySelector('div.content').appendChild(resultDiv);
  } else {
    resultDiv.querySelector('h3').textContent = `${playerScore} : ${computerScore}`;
  }

  let resultP = document.querySelector('div.result p');

  if (resultP == null) {
    resultP = document.createElement('p');
    resultP.textContent = resultText;
    resultDiv.appendChild(resultP);
  } else {
    resultP.textContent = resultText;
  }
}

function game(x, y) {
  if (playerScore >= 5 || computerScore >= 5) {
    document.querySelectorAll('button').forEach(button => {
      button.removeEventListener('click', playRound);
    })
    if (playerScore >= 5) {
      resultText = 'YOU WIN!';
    } else {
      if (computerScore >= 5) resultText = 'YOU LOOSE!';
    }
    return;
  }
  if (x === y) {
    resultText = 'Draw';
    return;
  }
  switch (x) {
    case ('rock'):
      if (y === 'scissors') {
        resultText = 'You win! Rock beats scissors';
        playerScore += 1;
        break;
      } else {
        resultText = 'You loose! Paper beats scissors';
        computerScore += 1;
        break;
      }
    case ('paper'):
      if (y === 'rock') {
        resultText = 'You win! Paper beats rock';
        playerScore += 1;
        break;
      } else {
        resultText = 'You loose! Scissors beats paper';
        computerScore += 1;
        break;
      }
    case ('scissors'):
      if (y === 'rock') {
        resultText = 'You loose! Rock beats scissors';
        computerScore += 1;
        break;
      } else {
        resultText = 'You win! Scissors beats paper';
        playerScore += 1;
        break;
      }
  }
}

function playRound() {
  const choices = ['rock', 'scissors', 'paper'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  let playerSelection = this.textContent.toLowerCase();

  game(playerSelection, computerSelection);
  displayResult();
}

// Adding events //
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', playRound)
})