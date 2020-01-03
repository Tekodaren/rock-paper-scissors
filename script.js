var playerScore = 0;
var computerScore = 0;
const selector = document.querySelectorAll("#buttons");
const displayResult = document.querySelector("#matchResult")
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");
const displayWinner = document.querySelector("#winner")
displayPlayerScore.textContent = "You: ";
displayComputerScore.textContent = "Computer: ";


function getRandomInt() {
    let upper = 2;
    let lower = 0;
    return Math.floor( Math.random() * (upper - lower + 1) ) + lower;
}

function computerPlay() {
    let handArray = ["Rock", "Paper", "Scissors"];
    return handArray[getRandomInt()];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        return "You win. Rock beats scissors!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        return "You lose. Paper beats rock!"
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You tied."
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        return "You win. Scissors beats paper!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        return "You lose. Rock beats scissors!"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You tied."
    }
    
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        return "You win. Paper beats rock!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        return "You lose. Scissors beats paper!"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You tied."
    }
}

function winner() {
    if (playerScore > computerScore) {
        displayWinner.textContent = "You win, " + playerScore + " vs " + computerScore + "!";
    } else if (computerScore > playerScore) {
        displayWinner.textContent = "You lose, " + playerScore + " vs " + computerScore + "!";
    } else {
        displayWinner.textContent = "You tied!";
    }
}


function createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.innerText = "RESET";
    resetButton.style.width = "auto"
    resetButton.style.height = "auto"
    resetButton.style.fontSize = "20px"
    resetButton.style.display = "block";
    resetButton.style.margin = "auto";
    resetButton.style.marginTop = "30px";
    const bottomOfPage = document.querySelector("#winner");
    bottomOfPage.appendChild(resetButton);
    resetButton.addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0;
        displayResult.textContent = "";
        displayPlayerScore.textContent = "You: " + playerScore;
        displayComputerScore.textContent = "Computer: " + computerScore;
        displayWinner.textContent = "";

    })
}

selector.forEach(button => button.addEventListener("click", e => {
    if (playerScore >= 5 || computerScore >= 5) return;                     // Prevents from playing more after game ends.
    let roundOutcome = playRound(e.srcElement.innerText, computerPlay());
    displayResult.textContent = roundOutcome;
    displayPlayerScore.textContent = "You: " + playerScore;
    displayComputerScore.textContent = "Computer: " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        winner();
        createResetButton();
    }
}))




