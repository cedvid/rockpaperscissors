let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;


function getComputerChoice() {
let choices = ["Rock","Paper", "Scissors"];
return computerSelection = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = (prompt("Rock, paper, Scissors?").trim().toLowerCase());
    computerSelection = getComputerChoice();

    if ( playerSelection == "rock" && computerSelection == "paper" ) {
        computerScore++;
        let result = "The computer played Paper. You lose! Paper beats Rock."
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result


    } else if ( playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        let result = "The computer played Rock. You win! Paper beats Rock"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;


    } else if ( playerSelection == "scissors" && computerSelection ==  "rock") {
        computerScore++;
        let result = "The computer played Rock. You lose! Rock beats Scissors"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;


    } else if ( playerSelection == "scissors" && computerSelection ==  "paper") {
        playerScore++;
        let result = "The computer played Paper. You win! Scissors beat Paper"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;


    } else if ( playerSelection == "rock" && computerSelection ==  "scissors") {
        playerScore++;
        let result = "The computer played Scissors. You win! Rock beats Scissors"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;


    } else if ( playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        let result = "The computer played Scissors. You lose! Scissors beat Paper"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;


    } else if ( playerSelection == computerSelection ) {
        let result = "You both played the same. It's a tie"
        result += "\n"
        result += "Your score: " + playerScore
        result += "\n"
        result += "Computer score: " + computerScore
        return result;
    }
}

function game() {
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore < 5 && computerScore < 5) {
        game();
    } else if (playerScore > computerScore) {
        console.log("Game Over! You Win!");
    } else if (computerScore > playerScore) {
        console.log("Game Over! Haha what a loser.");
    }
}

game();