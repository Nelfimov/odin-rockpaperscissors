const choices = ['rock', 'scissors', 'paper'];

function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer choice: ' + randomChoice);
    return randomChoice;
}

function playRockpaperscissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Draw';
    }

    switch(playerSelection.toLowerCase()) {
        case('rock'):
            if (computerSelection === 'scissors') {
                return 'You win! Rock beats scissors';
            } else {
                return 'You loose! Paper beats scissors';
            }
        case('paper'):
            if (computerSelection === 'rock') {
                return 'You win! Paper beats rock';
            } else {
                return 'You loose! Scissors beats paper';
            }
        case('scissors'):
            if (computerSelection === 'rock') {
                return 'You loose! Rock beats paper';
            } else {
                return 'You win! Scissors beats';
            }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        let playerChoice = prompt('Please enter your choice: rock, paper or scissors?');
        while (!choices.includes(playerChoice)) {
            playerChoice =  prompt('Please try again');
        }
        let result = playRockpaperscissors(playerChoice, getComputerChoice());
        alert(result);
    }
}
