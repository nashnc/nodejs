var calculator = require("./calculator");
var prompt = require("prompt-sync")();

var array = calculator;
var number1 = parseInt(prompt(`enter the frist number\n`));
var number2 = parseInt(prompt(`enter the second number\n`));

var operation = prompt(
  `\n 1 - Addition \n 2 - Multiplication\n 3- substraction\n 4 - Division \n 5- exponentiation \n 6 - Remainder`
);

operation > 6
  ? console.log(`invalid `)
  : operation < 1
  ? console.log(`invalid`)
  : theGame();

function theGame() {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == operation) {
      array[i].fun(number1, number2);
    }
  }
}

console.log(`ithukku mela mudiyathu boss`);
