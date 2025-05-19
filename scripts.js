let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");

function getComputerChoice() {
  const number = Math.floor(Math.random() * 100);

  if (number < 33) return "ROCK";
  else if (number < 66) return "PAPER";
  else return "SCISSORS";
}

rock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));
paper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("SCISSORS", getComputerChoice())
);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    switch (computerChoice) {
      case "ROCK":
        result.textContent = "It's a tie";
        break;
      case "PAPER":
        computerScore += 1;
        result.textContent = "Oh no! You lose! Paper beats rock.";
        break;
      case "SCISSORS":
        humanScore += 1;
        result.textContent = "Yes! You won! Rock beats scissors.";
        break;
      default:
        break;
    }
  }

  if (humanChoice === "PAPER") {
    switch (computerChoice) {
      case "PAPER":
        result.textContent = "It's a tie";
        break;
      case "ROCK":
        humanScore += 1;
        result.textContent = "Yes! You won! Paper beats rock.";
        break;
      case "SCISSORS":
        computerScore += 1;
        result.textContent = "Oh no! You lose! Scissors beats paper.";
        break;
      default:
        break;
    }
  }

  if (humanChoice === "SCISSORS") {
    switch (computerChoice) {
      case "SCISSORS":
        result.textContent = "It's a tie";
        break;
      case "ROCK":
        computerScore += 1;
        result.textContent = "Oh no! You lose! Rock beats scissors.";
        break;
      case "PAPER":
        humanScore += 1;
        result.textContent = "Yes! You won! Scissors beats paper.";
        break;
      default:
        break;
    }
  }
}

/*function playGame() {
  if (humanScore > computerScore) console.log("CONGRATULATIONS! YOU WON!");
  else console.log("You lost.");
  humanScore = 0;
  computerScore = 0;
}

playGame();*/
