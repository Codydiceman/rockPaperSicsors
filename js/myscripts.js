let randomNumer = Math.floor(Math.random() * 100) + 1
function getComputerChoice () {
    if (randomNumer >= 67) {
        return "rock"
    } else if (randomNumer < 67 & randomNumer > 34) {
        return "paper"
    } else {
        return "scissors"
    }
} 
const playerSelection = prompt("Rock, Paper, or Scisscors? ").toLowerCase()
const computerSelection = getComputerChoice()
function singleRound(computerSelection, playerSelection) {
    const a = playerSelection
    const b = computerSelection
    if(playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock, you lose!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper, you win!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors, you win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper, you win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock, you win!"
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors, you lose!"
    }  else {
        return "You have to pick rock, paper, or scissors!"
    }
}