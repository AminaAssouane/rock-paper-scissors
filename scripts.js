function getComputerChoice() {
    const number = Math.floor(Math.random() * 100);

    if (number < 33) return "ROCK";
    else if (number < 66) return "PAPER";
    else return "SCISSORS";
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors");
}

