//Get computer choice function - randomly returns either rock, paper,
// or scissors 
//function startGame() {
 //   let playerSelection = prompt("Choose your weapon!");
  //  if (
   //   playerSelection.toLowerCase() === "rock" ||
  //    playerSelection.toLowerCase() === "paper" ||
  //    playerSelection.toLowerCase() === "scissors"
  //  )
 //     document.getElementById("result").innerHTML = playRound(playerSelection);
  //  else alert("Spelling is hard, I know...");
 // } 
 const playerSelection = "Rock" //using const for now until I make the page live.
 let scoreComputer = 0
 let scorePlayer = 0
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
        return "It's a draw!";
      }    else if (
         (computerSelection === "Rock" && playerSelection === "Scissors") ||
         (computerSelection === "Paper" && playerSelection === "Rock") ||
         (computerSelection === "Scissors" && playerSelection === "Paper")
      )   {
          scoreComputer = scoreComputer + 1;
          return `You lose! ${computerSelection} beats ${playerSelection}`;
      }    else {
          scorePlayer = scorePlayer + 1;
          return `You win! ${playerSelection} beats ${computerSelection}`;
     }
   }
 
 function game(){      
 while (scoreComputer < 3 && scorePlayer < 3) {
     const computerSelection = getComputerChoice();
     const result = playRound(playerSelection) 
 }
     if (scoreComputer === 3){
         console.log( "You won the Game, I knew you could do it!");    
     }
     else {
         console.log("You lost the game... bested by less than 100 lines of code, smh.")
     }
   }
 
 
 game();