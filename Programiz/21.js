/*
JavaScript Program to Find the Sum of Natural Numbers

*/

var prompt = require("prompt-sync")();

var number = prompt(`enter a positive integer `);

number > 0
  ? execute(number)
  : console.log(` enter a positve integer greater than 1`);

function execute(number) {
  sum = 0;
  i = 0;
  while (i <= number) {
    sum += i;
    i++;
  }
  console.log(sum);
}
