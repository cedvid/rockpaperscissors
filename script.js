const startBtn = document.querySelector('.start');
const buttons = document.querySelectorAll('.button')
const results = document.querySelector('.results');
const userScoreCount = document.querySelector('.playerScore');
const compScoreCount = document.querySelector('.compScore')
const compChoice = document.querySelector('.compChoice');
const winner = document.querySelector('.winner');
const finalResult = document.querySelector('.final-result');
let playAgainBtn;

let playerScore = 0;
let computerScore = 0;
let choices = ["rock","paper", "scissors"];
let playerSelection;
let computerSelection;

function start() {
    document.querySelector('.instructions').style.display = "none";
    document.querySelector('.main').style.visibility = 'visible';
    document.querySelector(".start").style.display = "none";
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    playerSelection = button.value;
    playRound();
  });
}

function playRound() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector('.result-board').style.visibility = 'visible';

    if ( playerSelection == "rock" && computerSelection == "paper" ) {
        computerScore++;
        compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Paper beats Rock. 1 point for the computer.";
        results.style.color = 'red';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Paper beats Rock. 1 point for you!"
        results.style.color = '#03A062';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == "scissors" && computerSelection ==  "rock") {
        computerScore++;
        compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Rock beats Scissors. 1 point for the computer"
        results.style.color = 'red';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == "scissors" && computerSelection ==  "paper") {
        playerScore++;
        compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Scissors beat Paper. 1 point for you!"
        results.style.color = '#03A062';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == "rock" && computerSelection ==  "scissors") {
        playerScore++;
                compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Rock beats Scissors. 1 point for you!";
        results.style.color = '#03A062';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        compChoice.textContent = `COMPUTER PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "Scissors beat Paper. 1 point for the computer"
        results.style.color = 'red';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;

    } else if ( playerSelection == computerSelection ) {
        compChoice.textContent = `COMPUTER ALSO PICKED: ${computerSelection.toUpperCase()}`;
        results.textContent = "It's a tie!"
        results.style.color = '#03A062';
        userScoreCount.textContent = `PLAYER SCORE: ${playerScore}`;
        compScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;
    }
    checkWinner();
}

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById('rock').classList.remove('hover-on');
    document.getElementById("paper").disabled = true;
    document.getElementById("paper").classList.remove('hover-on');
    document.getElementById("scissors").disabled = true;
    document.getElementById("scissors").classList.remove('hover-on');
    document.querySelector('.final-result').style.visibility = 'visible';
    playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "PLAY AGAIN";
    finalResult.appendChild(playAgainBtn);
    playAgainBtn.addEventListener("click", playAgain);
    }   if (playerScore == 5) {
        winner.textContent = "YOU SCORED 5 POINTS! YOU ARE THE WINNER!";
        } else if (computerScore == 5) {
        winner.textContent = 'THE COMPUTER BEAT YOU...BETTER LUCK NEXT TIME.';
        winner.style.color = 'red';
        }
}

function playAgain() {
    document.getElementById("rock").classList.add('hover-on');
    document.getElementById("paper").classList.add('hover-on');
    document.getElementById("scissors").classList.add('hover-on');
    document.querySelector('.result-board').style.visibility = 'hidden';
    document.querySelector('.final-result').style.visibility = 'hidden';
    playerScore = 0;
    computerScore = 0;
    userScoreCount.textContent = "PLAYER SCORE: 0";
    compScoreCount.textContent = "COMPUTER SCORE: 0"
    winner.textContent = "";
    playAgainBtn.parentNode.removeChild(playAgainBtn);
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

startBtn.addEventListener('click', start);