/**
 * Function to play the game of Craps
 */
function playCraps() {
    // Generate two random numbers between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    
    // Calculate the sum of the two dice
    var sum = die1 + die2;
    
    // Display the results
    var resultElement = document.getElementById("result");
    if (sum === 7 || sum === 11) {
        resultElement.innerHTML = "CRAPS - You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultElement.innerHTML = "You won!";
    } else {
        resultElement.innerHTML = "You pushed!";
    }
}
