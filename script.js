"use strict";


const mainGame = document.querySelector(".main-body");
const resetGame = document.querySelector(".reset");



// computers randomly selected value between rock, paper scissors
const opponentOptions = ["rock", "paper", "scissors"];
let opponentChoice = opponentOptions[Math.floor(Math.random() * opponentOptions.length)];

// Player choices
const choices = document.querySelectorAll(".player-btn");

// SCORES

let playerScore = 0;
let opponentScore = 0;

// FUNCTION TO PRINT OPPONENT CHOICE

const opponentMessage = function() {
  document.querySelector(".opponent-result").textContent = opponentChoice;
}

// FUNCTION FOR WHEN YOU WIN

const youWin = function() {
  document.querySelector(".result").textContent = "You Win"
  playerScore++;
  document.querySelector("#player-number").textContent = playerScore;
}

// FUNCTION FOR WHEN YOU LOSE 

const youLose = function() {
  document.querySelector(".result").textContent = "You lose"
  opponentScore++;
  document.querySelector("#opponent-number").textContent = opponentScore;
}


//On click of a button select a exact value

for(let i = 0; i < choices.length; i++){
  choices[i].addEventListener("click", function(){
    let playerChoice = choices[i].textContent;
    opponentChoice = opponentOptions[Math.floor(Math.random() * opponentOptions.length)];
    console.log(playerChoice, opponentChoice);

    if(playerChoice === opponentChoice) {
      opponentMessage();
      document.querySelector(".choice-result").textContent = `You both chose ${playerChoice}`;
      document.querySelector(".result").textContent = "It's a draw"
    } else if (playerChoice === "rock" && opponentChoice === "paper") {
      opponentMessage();
      youLose();
      document.querySelector(".choice-result").textContent = `Rock loses to paper`;
    } else if (playerChoice === "rock" && opponentChoice === "scissors") {
      opponentMessage();
      youWin();
      document.querySelector(".choice-result").textContent = `Rock beats scissors`;
      // ROCK CHOICES DONE
    } else if (playerChoice === "paper" && opponentChoice === "rock") {
      opponentMessage();
      youWin();
      document.querySelector(".choice-result").textContent = `Paper beats rock`;
    } else if (playerChoice === "paper" && opponentChoice === "scissors") {
      opponentMessage();
      youLose();
      document.querySelector(".choice-result").textContent = `Paper loses to Scissors`;
      // PAPER CHOICES DONE
    } else if (playerChoice === "scissors" && opponentChoice === "paper") {
      opponentMessage();
      youWin();
      document.querySelector(".choice-result").textContent = `Scissors beat Paper`;
    } else if (playerChoice === "scissors" && opponentChoice === "rock") {
      opponentMessage();
      youLose();
      document.querySelector(".choice-result").textContent = `Scissors lose to rock`;
    }
    
    // chaning the text on the reset screen
    document.querySelector(".winner-loser").textContent = `${playerScore === 5 ? "You Won" : "You Lost"}`;

    // reseting values after the game ends
    if(playerScore === 5 || opponentScore === 5) {
      document.querySelector("#player-number").textContent = 0;
      document.querySelector("#opponent-number").textContent = 0;
      playerScore = 0;
      opponentScore = 0;
      mainGame.classList.add("hidden");
      document.querySelector(".reset").classList.remove("hidden")
    }

    // reseting the game 
    document.querySelector(".reset-btn").addEventListener("click", function() {
      mainGame.classList.remove("hidden");
      document.querySelector(".reset").classList.add("hidden")
    });
    
  })
};





