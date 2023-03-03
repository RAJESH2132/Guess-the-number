"use strict";

let secreteNumber = Math.trunc(Math.random() * 10) + 1;
let highScore = 0;
let score = 10;

//function for message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//text input field enabling and disabling
const inputResponse = function (choice) {
  document.querySelector(".guess").disabled = choice;
};
// console.log(document.querySelector(".message").textContent);

//adding eventListener to read number from the input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess);

  /* if (!guess) {
   displayMessage("❌Please Enter a Number");
     document.querySelector(".message").textContent = "❌Please Enter a Number";
   } else
   */

  //if statement to reject the blank ,0 and numbers greater than 10
  if (guess < 1 || guess > 10 || !guess) {
    displayMessage("❌Enter Between 1 t0 10");

    // document.querySelector(".message").textContent = "❌Enter Between 1 t0 10";

    //Refactored code using ternary operator
  } else if (guess != secreteNumber) {
    if (score > 1) {
      displayMessage(
        guess > secreteNumber ? "📈 Number too High" : "📉 Number too Low"
      );

      /* document.querySelector(".message").textContent =
        guess > secreteNumber ? "📈 Number too High" : "📉 Number too Low";
      */

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭You lost the Game!");
      // document.querySelector(".message").textContent = "😭You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secreteNumber) {
    displayMessage("🎉 congratulations");
    // document.querySelector(".message").textContent = "🎉 congratulations";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secreteNumber;

    //Disables the text input field after winning the game
    //adding functionality to the input field after winning the game
    inputResponse(true);
    //document.querySelector(".guess").disabled = true;

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //code before refactoring
  /*else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Number too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
    
  } 
  */
});

//added event listener for again button
//if again button is clicked all the data will be changed except the highest score
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secreteNumber = Math.trunc(Math.random() * 10) + 1;
  //adding functionality to the input field after clicking Again button
  inputResponse(false);
  //document.querySelector(".guess").disabled = false;
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
});

//added enter key functionality for check button
document.querySelector(".guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".check").click();
  }
});
