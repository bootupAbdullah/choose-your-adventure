// i am adding a const prompt
const prompt = require("prompt-sync")();
const username = prompt("What is your name? ");
console.log(`Hi, ${username}! This is a choose your adevnture game! 
You're going to be prompted with questions and your decisions will determine your outcome.`);

const decision1 = prompt("Are you ready? Y or N");

if (decision1.toLowerCase() === "y") {
  console.log(
    "Great, the game is simple, collect the sword, sheild and helmet and face the dragon. \nIf you collect all (3) items it increases your chances of defeating the Dragon."
  );
} else if (decision1.toLowerCase() === "n") {
  console.log(`There isn't much else to do here, ${username}.`);
  redirect1 = prompt(`Why don't you try pressing 'Y'?`);
  console.log(
    `That's the spirit, ${username}! \nSo, the game is simple, collect the Sword, Sheild and Helmet and face off with the Dragon. \nYou increase your chances of success if you collect all three items.`
  );
} else {
  console.log(
    `my responses are limited ${username}. You must choose 'Y' or 'N'`
  );
}

decision2 = prompt(
  "Which would you like to go after first? Sword, Shield or Helmet?"
);
if (decision2 === "Helmet" || decision2 === "helmet") {
  console.log("A fine choice, you've got to protect the old noggin.");
} else if (decision2 === "Sword" || decision2 === "sword") {
  console.log("Great choice! You'll certainly need that!");
} else if (decision2 === "Sheild" || decision2 === "sheild") {
  console.log("Ah, not bad, going with defense, smart move.");
} else {
  console.log("Try again and check your spelling, I am still new at this.");
}


// ! Please see README.md
