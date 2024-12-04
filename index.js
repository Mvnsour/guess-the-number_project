import { prompt } from "./prompt.js";

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

let targetNumber = Math.floor(Math.random() * 3); //random number generated between 0 and 100, Math.floor() is used to round the number and get a whole number
let attemptCount = 0; 
console.log(targetNumber);  // to see the result

function isValidNumber(number) {
// check if the number entered is really a number and if it's a number between 0 and 100
  return !Number.isNaN(number) && number >= 0 && number <= 3;
}

function guessingGame() {
  const userInput = Number(prompt('Enter a number : '));
  attemptCount++; // incrementation of attempt atfer the user input

  if (!isValidNumber(userInput)) { // using "!" means negation 
    console.log(`is an invalid number. It must be a number between 0 and 100.`);
    guessingGame(); // calling the func to ask again the user, recursive func
    return; // to stop the script
  }
}

guessingGame();