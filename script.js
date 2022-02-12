function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3); 
    return options[randomNumber];
}

function playRound(playerChoice, computerChoice){
    console.log(`player: ${playerChoice}, comupter: ${computerChoice}`);
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
function buttonPress(btn){
    console.log(btn);
        if (btn == "reset"){
            reset();
        } else {
            result = playRound(btn, computerPlay());  
            game(result);
        }
}
function reset(){
    output = document.getElementsByClassName("output")[0].innerHTML = `Let's play rock, paper, scissors!`;    
    result = 0;
    playerPoints = 0;
    computerPoints = 0;
    printOut(playerPoints, computerPoints);
    firstline = document.getElementsByClassName("firstline")[0].innerHTML = 'SCORE:'
    choice = document.getElementsByClassName("buttons");
    choice[0].style.display = "flex";
}

function printOut (p, c){
    player = document.getElementsByClassName("player")[0].innerHTML = `Player: ${p} points`;
    computer = document.getElementsByClassName("computer")[0].innerHTML = `Computer: ${c} points`;
}

function game(result){
    firstline = document.getElementsByClassName("firstline")[0].innerHTML = 'SCORE:'
    if (result > 1) {
        output = document.getElementsByClassName("output")[0].innerHTML = `Computer won!`;
        computerPoints ++;
        printOut(playerPoints, computerPoints);
    }
    else if (result < 1){
        output = document.getElementsByClassName("output")[0].innerHTML = `You won!`;
        playerPoints ++;
        printOut(playerPoints, computerPoints);
    }
    else {
        output = document.getElementsByClassName("output")[0].innerHTML = `Tie!`;
        printOut(playerPoints, computerPoints);
    }       
    if (playerPoints == 5) {
        printOut(playerPoints, computerPoints);
        firstline = document.getElementsByClassName("firstline")[0].innerHTML = 'GAME OVER! YOU WON!';
        choice = document.getElementsByClassName("buttons");
        choice[0].style.display = "none";
    } else if (computerPoints == 5) {
        printOut(playerPoints, computerPoints);
        firstline = document.getElementsByClassName("firstline")[0].innerHTML = 'GAME OVER! COMPUTER WON!';
        choice = document.getElementsByClassName("buttons");
        choice[0].style.display = "none";
    }

}

let output = document.getElementsByClassName("output")[0].innerHTML = `Let's play rock, paper, scissors!`;
const buttons = document.getElementsByClassName("butt");

let result = 0;
let counter = 0;
let playerPoints = 0;
let computerPoints = 0;
let choice = document.getElementsByClassName("buttons");
let firstline = document.getElementsByClassName("firstline")[0].innerHTML = 'SCORE:';
let player = document.getElementsByClassName("player")[0].innerHTML = `Player: ${playerPoints} points`;
let computer = document.getElementsByClassName("computer")[0].innerHTML = `Computer: ${computerPoints} points`;

console.log(document.getElementsByClassName("player").innerHTML);

Array.from(buttons).forEach(function(buttons){
    buttons.addEventListener("click", function(){buttonPress(buttons.innerHTML.toLowerCase())});   
});