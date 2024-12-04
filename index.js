import { prompt } from "./prompt.js";

function isValidNumber(number) {
  // check if the number entered is really a number and if it's a number between 0 and 100
    return !Number.isNaN(number) && number >= 1 && number <= 100;
  }

function game() {
  let targetNumber = Math.floor(Math.random() * 100); //random number generated between 0 and 100, Math.floor() is used to round the number and get a whole number
  let attemptCount = 0; 

  const guessingGame = () => {
    const userInput = Number(prompt('Enter a number : '));
    attemptCount++; // incrementation of attempt atfer the user input
  
    if (!isValidNumber(userInput)) { // using "!" means negation 
      console.log(`${userInput} is an invalid number. It must be a number between 0 and 100.\n\n`);
      guessingGame(); // calling the func to ask again the user, recursive function
      return; // to stop the script
    }
  
    if (userInput < targetNumber) {
      console.log(`The number entered "${userInput}" is too small. Try again.\n`);
      guessingGame(); 
    }
  
    if (userInput > targetNumber) {
      console.log(`The number entered "${userInput}" is too big. Try again.\n`);
      guessingGame(); 
    }
  // correct answer found by the user 
      console.log(`Congratulations ! ${userInput} was the random number.`);
      console.log(`You tried ${attemptCount} times.\n\n`);
  }

  const replayGame = () => {
    const choice = prompt("Do you want to play again ? (y/n) : ")
  
    if (choice === "y") {
      console.log("Here we go again !\n\n");
      guessingGame();
    } else if (choice === "n") {
      console.log("Thank you for playing ! Goodbye");
      return;
    } else {
        console.log(`I don't understand your choice. Please, choose between "y" and "n".\n`);
        replayGame();
      }
    }

    guessingGame();
    replayGame();
}

console.log(
`Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀`
);

game();