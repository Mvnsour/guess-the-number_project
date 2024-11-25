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

function isValidNumber(number) {
  if (Number.isNaN(number) && number >= 0 && number <= 100) {
    return `Error. ${number} is invalid. The number must be between 0 and 100.\n`
  }
}

let targetNumber = Math.floor(Math.random() * 100); //random number generated between 0 and 100, Math.floor() is used to round the number and get a whole number
console.log(targetNumber);  // to see the result
let attemptCount = 0;