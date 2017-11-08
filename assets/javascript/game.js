// declared global variables:
var keyPress;
var availableLetters;
var parks = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral"];
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answerArray = [];
var guessRight;
var guessWrong;

// state of variable at beginning of the game.
var winsTally = 0;
// state of variable at beginning of the game.
var guessesRemaining = 10;

// Generates a random park name from the parks array. Stores the word I want the player to guess.
var random = parks[Math.floor(Math.random() * parks.length)];
console.log(random);

// Populates the Wins with 0 and Guesses Remaining with 6 at the start the game.
document.getElementById("wins").innerHTML = winsTally;
console.log(winsTally);
document.getElementById("guesses").innerHTML = guessesRemaining;
console.log(guessesRemaining);

// Shows the random word. Needs to display as "_'s" in the Current Word section. Needs to update as user chooses correct letters.
for (var i = 0; i < random.length; i++) {
    answerArray[i] = "_ ";
    console.log(answerArray);
}

// Variable to track remaining letters - does this need to be inside the GAME LOOP?
var remainingLetters = random.length;
console.log(remainingLetters);


// Press a letter key to start the game. 
// Take the letter input from the user. Have the first key pressed be the first guess. Must be one letter and no other characters. 
//Accomodate for non-letters with If statement for keys not included in alphabetArray.


document.onkeyup = function (event) {
    var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyPress);

    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(alphabetArray);

    //if the index comes out as -1, it means that keyPress was NOT in the alphabetArray
    //if I typed "]" or "m", for example, this code would run
    if (alphabetArray.indexOf(keyPress) === -1) {
        console.log("Please choose a single letter to start the game.");

        //if the index comes out as anything other than -1, it means the letter was in the array
        //if I typed "a" or "b", for example, this code would run    
    } else if (random.indexOf(keyPress) > -1) {

        // If the player guesses a correct letter, add the letter to the correct location in Current Word <span id="answer">
        for (var j = 0; j < random.length; j++) {
            if (random[j] === guessRight) {
                answerArray[j] = guessRight;
                remainingLetters--;
            }
        }
        document.getElementById("answer").innerHTML = answerArray.join("");
        console.log(answerArray);

        // If the player guesses a wrong letter, add the letter to <span id="lettersUsed"> and decrease guessesRemaining by 1.
        // document.getElementById("lettersUsed").innerHTML = ????????;
    }

}


// If the player fills in the whole word, display the word and add 1 to winsTally. (Inside of Game Loop?)
// Display a Congratulations message and reset the game.
function gameOver(win) {
    if (win) {
        document.getElementById("congratulations").innerHTML = "Congratulations, you won! The Park name is" + random;
        // add 1 to winsTally
    } else {
        document.getElementById("gameover").innerHTML = "Sorry, you lost this time! The Park name is" + random;
    }
    console.log(win);
    // Reset the game???

}