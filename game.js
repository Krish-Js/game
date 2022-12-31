// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of incorrect guesses to 0
let numIncorrectGuesses = 0;

// Start the game loop
while (true) {
  // Get a guess from the player
  const playerGuess = prompt("Enter your guess:");

  // Convert the player's guess to a number
  const guess = parseInt(playerGuess, 10);

  // Check if the player's guess is correct
  if (guess === targetNumber) {
    alert("Congratulations, you won!");
    break;
  }

  // Increment the number of incorrect guesses
  numIncorrectGuesses++;

  // Check if the player has made too many incorrect guesses
  if (numIncorrectGuesses >= 10) {
    alert("Sorry, you lost. The correct number was " + targetNumber);
    break;
  }

  // Give the player a hint
  if (guess < targetNumber) {
    alert("Your guess is too low. Try again.");
  } else {
    alert("Your guess is too high. Try again.");
  }
}
