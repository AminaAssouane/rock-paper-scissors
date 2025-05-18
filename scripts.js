let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputerChoice() {
  const number = Math.floor(Math.random() * 100);

  if (number < 33) return "ROCK";
  else if (number < 66) return "PAPER";
  else return "SCISSORS";
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper or scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice === "ROCK") {
    switch (computerChoice) {
      case "ROCK":
        console.log("It's a tie!");
        break;
      case "PAPER":
        computerScore += 1;
        console.log("Oh no! You lose! Paper beats rock.");
        break;
      case "SCISSORS":
        humanScore += 1;
        console.log("Yes! You won! Rock beats scissors.");
        break;
      default:
        break;
    }
  }

  if (humanChoice === "PAPER") {
    switch (computerChoice) {
      case "PAPER":
        console.log("It's a tie!");
        break;
      case "ROCK":
        humanScore += 1;
        console.log("Yes! You won! Paper beats rock.");
        break;
      case "SCISSORS":
        computerScore += 1;
        console.log("Oh no! You lose! Scissors beats paper.");
        break;
      default:
        break;
    }
  }

  if (humanChoice === "SCISSORS") {
    switch (computerChoice) {
      case "SCISSORS":
        console.log("It's a tie!");
        break;
      case "ROCK":
        computerScore += 1;
        console.log("Oh no! You lose! Rock beats scissors.");
        break;
      case "PAPER":
        humanScore += 1;
        console.log("Yes! You won! Scissors beats paper.");
        break;
      default:
        break;
    }
  }
}

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  if (humanScore > computerScore) console.log("CONGRATULATIONS! YOU WON!");
  else console.log("You lost.");
  humanScore = 0;
  computerScore = 0;
}

playGame();
