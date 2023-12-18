let firstChoiceMade = false;

function userChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(choice, computerChoice);

    displayResult(choice, computerChoice, result);
    showPlayAgainButton();
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResult(user, computer, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You chose <i class="fas fa-hand-${user}"></i>. Computer chose <i class="fas fa-hand-${computer}"></i>. Result: ${result}`;
}

function showPlayAgainButton() {
    const playAgainButton = document.getElementById('play-again');
    if (!firstChoiceMade) {
        playAgainButton.style.display = 'inline-block';
        firstChoiceMade = true;
    }
}

function resetGame() {
    const resultDiv = document.getElementById('result');
    const playAgainButton = document.getElementById('play-again');
    resultDiv.innerHTML = '';
    playAgainButton.style.display = 'none';
    firstChoiceMade = false;
}
