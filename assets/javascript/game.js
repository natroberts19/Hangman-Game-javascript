// declared variables:
var anyKey;
var parks = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah"];
var random;
var guess;
var winsTally;
var guessTally;

// get elements

// Press any key to start the game.
// var anyKey = document.onkeyup = function(event) {
//     anyKey.textContent = event.key;
//     console.log(anyKey); 
// }

// console.log(start-key);

// Generates a random park name from the parks array.
var random = parks[Math.floor(Math.random() * parks.length)];
console.log(random);

// Shows the random word. Needs to display as "_'s" in the Current Word section.
var answerArray = [];
for (var i = 0; i < random.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = random.length;

console.log(remainingLetters);

// Creating a variable to hold our new HTML that tracks wins.
var htmlLetters = "<p>"+ answerArray +"</p>";

// Set the inner HTML contents of the #wins to our html string
document.getElementById("answerArray").innerHTML = htmlLetters;


    // Displays user progress. Needs to display in the Current Word or Letters Used section.
    console.log(answerArray.join(""));

    // // Take the input from the user
    var guess = document.getElementById("user-guess");
    document.onkeyup = function (event) {
        guess.textContent = event.key;
        console.log(guess);
    }


// Updates the answerArray
for (var j = 0; j < parks.length; j++) {
    if (parks[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
    }
}
// console.log(answerArray);


// alert("Good job! The answer was" + random);


// Creating a variable to hold our new HTML that tracks wins.
var htmlWins = "<p> wins" + winsTally + "</p>";

// Set the inner HTML contents of the #wins to our html string
document.getElementById("winsTally").innerHTML = htmlWins;

// Creating a variable to hold our new HTML that tracks guesses.
var htmlGuesses = "<p> guesses" + guessTally + "</p>";

// Set the inner HTML contents of the #guesses to our html string
document.getElementById("guessTally").innerHTML = htmlGuesses;
