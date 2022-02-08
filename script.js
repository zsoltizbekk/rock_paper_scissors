function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3); 
    return options[randomNumber];
}

function playRound(playerChoice, computerChoice){
    switch (playerChoice){
        case "rock":
            if (computerChoice == "Rock") return("1"); //"Tie!"
            else if (computerChoice == "Paper") return("2"); //"Computer won!"
            else return("0"); //"You won!"
            break;
        case "paper":
            if (computerChoice == "Paper") return("1"); //"Tie!"
            else if (computerChoice == "Scissors") return("2"); //"Computer won!"
            else return("0"); //"You won!"
            break;
        case "scissors":
            if (computerChoice == "Scissors") return("1"); //"Tie!"
            else if (computerChoice == "Rock") return("2"); //"Computer won!"
            else return("0"); //"You won!"
            break;
        default:
            break;
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let currentGame
    for (let i = 1; i <= 5 ; i++){
        let playerChoice = prompt(`Let's play rock paper scissors!
Chose from the following: Rock, Paper, Scissors`).toLowerCase();
        currentGame = playRound(playerChoice, computerPlay());
        console.log(currentGame);
        if (currentGame < 1 ) { 
            console.log(`Player won the ${i} round!`);
            playerScore++;
        }
        else if (currentGame > 1 ) {
            console.log(`Computer won the ${i} round!`);
            computerScore++;
        }
        else console.log(`The ${i} round was a tie!`);
    }
    if (computerScore > playerScore){
        return(`Computer won with ${computerScore} points!`);
    } else if (computerScore < playerScore){
        return(`Player won with ${playerScore} points!`);
    } else return(`It was a tie with ${computerScore} points!`);
}


console.log("-----");
console.log(game());