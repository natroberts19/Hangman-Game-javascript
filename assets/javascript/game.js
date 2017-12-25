// Declared global variables:
// all the answer options
var parksList = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral", "denali", "grand tetons", "gettysburg", "joshua tree", "antietam", "jean lafitte", "isle royale", "grand canyon"];
// variable that represents the solution.
var randomWord = "";
// variable to break the solution up into indv letter to be stored in the array:
var lettersInChosenWord = [];
// number of blanks shown based on solution.
var numBlanks = 0;
// mixture of blanks and correct letters.
var blanksAndSuccesses = [];
// holds all the wrong guesses.
var guessWrongArray = [];
// Game counters:
// state of variable at beginning of the game.
var winsTally = 0;
var lossTally = 0;
var messageWon = "Congrats - you won!";
var messageLost = "Sorry - try again!";
var messageRemove = "";
// state of variable at beginning of the game.
var guessesLeft = 10;


// Part II: Start the game. Create the functions.
// Generates a random park name from the parks array. Stores the word I want the player to guess.

// This function is how we will start and restart the game. Doesn't run here; it's for future use.
function startGame() {
    // reset guesses back to 0.
    guessesLeft = 10;

    // choose solution randomly from the parksList.
    randomWord = parksList[Math.floor(Math.random() * parksList.length)];
    console.log(randomWord);
    // break the word up into indv letters. Then count the letters in the word.
    lettersInChosenWord = randomWord.split("");
    console.log("Letters in Chosen Word (split): ", lettersInChosenWord);
    numBlanks = lettersInChosenWord.length;
    console.log("Random Word: ", randomWord);

    // Now, reset the guess/success array after each round.
    blanksAndSuccesses = [];
    // And, reset the worng guesses after each round.
    guessWrongArray = [];

    // Fill up the blanks and successes list with the correct number of blanks based on the number of letters in the solution.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log("no. of Blanks: ", blanksAndSuccesses);

    // Puts the guesses left back to 10
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    console.log("Guesses Left: ", guessesLeft);
    // Prints the blanks at the beginning of each round.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    // clears the wrong guesses from the previous round.
    document.getElementById("letters-used").innerHTML = guessWrongArray.join(" ");

}

// Part III. Now we need a function to complete all of the comparisons to match letters to guesses, etc. Creating for future use.

function checkLetters(letter) {
    // create boolean toggle based on whether a user letter is found in the word.
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        // ==>
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }
    // if the letter exists in the word, then find out where it belongs.
    // ==>
    if (letterInWord) {
        // Loop through the word
        for (var j = 0; j < numBlanks; j++) {
            if (randomWord[j] === letter) {
                // put it in the correct spot.
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log("Correct Spot?: ", blanksAndSuccesses);
    }
    // ==>
    else {
        // add the letter to the list of wrong letters and subtract one of the guesses.
        guessWrongArray.push(letter);
        guessesLeft--;
    }
}

// Part IV. Create a function to hold all the code that needs to be run after each guess is made.
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
    console.log("Wins: " + winsTally + " | LossCount: " + lossTally + " | Guesses Left: " + guessesLeft);

    // update the page to reflect the new number of guesses and update the correct guesses.
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("letters-used").innerHTML = guessWrongArray.join(" ");

    // if all the letters match the solution.
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        // add to winsTally
        winsTally++
        // document.getElementById("you-won").innerHTML = messageWon;
        document.getElementById("wins-tally").innerHTML = winsTally;
        // restart the game.
        startGame();
    } else if (guessesLeft === 0) {
        lossTally++
        // document.getElementById("you-lost").innerHTML = messageLost;
        document.getElementById("losses-tally").innerHTML = lossTally;
        // restart the game.
        startGame();
    }
}

// run start game function.
startGame();

// Main Processes to start the game.
document.onkeyup = function (event) {
    var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyPress);

    // runs the function to compare for correctness.
    checkLetters(keyPress);
    // run the function after each round.
    roundComplete();
    // Get rid of the won/lost messages.
    // document.getElementById("you-won").innerHTML = messageRemove;
    // document.getElementById("you-lost").innerHTML = messageRemove;
};