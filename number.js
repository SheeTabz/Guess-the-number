"Use strict";
/* console.log(document.querySelector(".message").textContent);
 console.log((document.querySelector(".message").textContent = "Correct!!"));
document.querySelector(".number").textContent = "15";
 document.querySelector(".score").textContent = "14";*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//CLICK EVENTS
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //When ther is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Value!!";
  }
  //When the player wins the game
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉🎉Correct Guess";
    document.querySelector(".number").textContent = secretNumber; //the secretNumber should only be displayed when the guess is correct.

    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //Refactoring code to make it dry and avoid repetition.
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "To High❗" : "To Low❗";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🛑GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //When the guess is higher than the secret number
  // else if (guess > secretNumber) {
  //if (score > 1) {
  //document.querySelector(".message").textContent = "To High❗";
  //score--;
  //document.querySelector(".score").textContent = score;
  //} else {
  //document.querySelector(".message").textContent = "🛑GAME OVER!";
  //document.querySelector(".score").textContent = 0;
  //}
  //}
  //When the guess is lower than the secret number
  //else if (guess < secretNumber) {
  //if (score > 1) {
  //document.querySelector(".message").textContent = "To Low!!";
  //score--;
  //document.querySelector(".score").textContent = score;
  //} else {
  //document.querySelector(".message").textContent = "🛑GAME OVER!";
  //document.querySelector(".score").textContent = 0;
  //}
  //}
}); // the 'click' and function() act as the argument of the addEventListener()function

// AGAIN BTn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1); // resets the secretNumber
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
