
let scoreComputer = 0
let scorePlayer = 0

let startGameButton = document.getElementById("startGameButton");
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

startGameButton.addEventListener("click", function() {
    rockButton.style.display = "block";
    paperButton.style.display = "block";
    scissorsButton.style.display = "block";
});

let playerSelection = "";
rockButton.addEventListener("click", function() {
    let playerSelection = "Rock";
    playRound(playerSelection);
});

paperButton.addEventListener("click", function() {
    let playerSelection = "Paper";
    playRound(playerSelection);

});

scissorsButton.addEventListener("click", function() {
    let playerSelection = "Scissors";
    playRound(playerSelection);
}); 

function startGame() {  
    document.getElementById("result").innerHTML = "Please choose one of the buttons: rock, paper, or scissors.";
}

 function getComputerChoice() {
     let choice = Math.random()
         if (choice < 1/3) {
             return "Rock" } 
 
         else if (choice > 2/3) {
             return "Paper"
         }
 
         else return "Scissors"
 
     }
 
     function playRound(playerSelection) {
         const computerSelection = getComputerChoice();
      if (computerSelection === playerSelection) {
        document.getElementById("result").innerHTML = "It's a draw!";
      }    else if (
         (computerSelection === "Rock" && playerSelection === "Scissors") ||
         (computerSelection === "Paper" && playerSelection === "Rock") ||
         (computerSelection === "Scissors" && playerSelection === "Paper")
      )   {
          scoreComputer++;
          document.getElementById("result").innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
          document.getElementById("liveScoreComputer").innerHTML = scoreComputer
      }    else {
          scorePlayer++;
          document.getElementById("result").innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
          document.getElementById("liveScorePlayer").innerHTML = scorePlayer
     }
     game();
   }
 function game(){   
    if (scoreComputer === 5) {
        document.getElementById("winner").innerHTML = "Wow, you're not very good at this...";
     }
    else if (scorePlayer === 5) {
        document.getElementById("winner").innerHTML = "Congradulations, you beat a computer in a game of chance :).";
    }
    return
   };