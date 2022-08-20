let computerSelection;
let playerSelection;

function getComputerChoice() {
    let choices = ["Rock","Paper", "Scissors"];
    computerSelection = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return;
} 

function getPlayerChoice() {
    playerSelection = (prompt("Rock, paper, Scissors?")).trim().toLowerCase();
    return;
}

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "rock" && computerSelection == "paper" ) {
        return ("You lose! Paper beats Rock")
    } else if ( playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats Rock")
    } else if ( playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! Rock beats Scissors")
    } else if ( playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win! Scissors beat Paper")
    } else if ( playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats Scissors")
    } else if ( playerSelection == "paper" && computerSelection == "scissors") {
        return ("You lose! Scissors beat Paper")
    } else if ( playerSelection == computerSelection ) {
        return ("Its a tie!")
    }
}

getComputerChoice();
getPlayerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

