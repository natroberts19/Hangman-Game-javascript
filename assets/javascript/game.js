// declared global variables:
var parks = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral"];
var random;
var answerArray = [];
var guess;
var winsTally;
var guessTally;


// Press any key to start the game.
// var anyKey = document.onkeyup = function(event) {
//     anyKey.textContent = event.key;
// }
//     console.log(anyKey); 

// Generates a random park name from the parks array. Stores the word we want the player to guess.
var random = parks[Math.floor(Math.random() * parks.length)];
console.log(random);

// Shows the random word. Needs to display as "_'s" in the Current Word section.
var answerArray = [];
for (var i = 0; i < random.length; i++) {
    answerArray[i] = "_ ";
}

console.log(i);

var remainingLetters = random.length;
console.log(remainingLetters);

// Displays user progress. Needs to display in the Current Word or Letters Used section.
document.getElementById("answer").innerHTML = answerArray.join("");
console.log(answer);


// Starts the GAME LOOP. Take the input from the user

// while (remainingLetters > 0) {
//     // show player their progress
//     var progress = document.getElementById("answer");
//     progress.innerHTML = answerArray.join(" ");



// }