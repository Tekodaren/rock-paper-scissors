var playerScore = 0;
var computerScore = 0;

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
        playerScore++;
        return "You win. Rock beats scissors!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return "You lose. Paper beats rock!"
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You tied."
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You win. Scissors beats paper!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return "You lose. Rock beats scissors!"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You tied"
    }
    
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return "You win. Paper beats rock!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You lose. Scissors beats paper!"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You tied."
    }
}

function winner() {
    if (playerScore > computerScore) {
        text3.textContent = "You win, " + playerScore + " vs " + computerScore + "!";
      } else if (computerScore > playerScore) {
        text3.textContent = "You lose, " + playerScore + " vs " + computerScore + "!";
      } else {
        text3.textContent = "You tied!";
      }
}



const selector = document.querySelectorAll("#buttons");
selector.forEach(button => button.addEventListener("click", e => {
    if (playerScore < 5 && computerScore < 5) {
        let outcome = playRound(e.srcElement.innerText, computerPlay());
        displayResult.textContent = outcome;
        text1.textContent = playerScore;
        text2.textContent = computerScore;
    } else {
        winner();
    }
}))

const displayResult = document.querySelector("#score")
const text1 = document.querySelector("#playerScore");
const text2 = document.querySelector("#computerScore");
const text3 = document.querySelector("#winner")