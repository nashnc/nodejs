var input = require("prompt-sync")();
var number = parseInt(input(`enter a number between 1 and 99 \n\n\n\n\n`));
console.log(number);
number > 99 || number < 0
  ? console.log(`the number is outside the given range `)
  : guess(number);

function guess(number) {
  var pc = Math.floor(Math.random() * (99 - 1)) + 1;

  pc == number
    ? console.log(`the guessed number: \t ${pc} is correct\n well done `)
    : console.log(
        `the guess of number \t${number} was wrong the correct number was ${pc}`
      );
}
