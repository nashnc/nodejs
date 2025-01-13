/*
JavaScript Program to Check if the Numbers Have Same Last Digit
*/

var prompt = require("prompt-sync")();

var number1 = prompt(`enter first  integer \n`);
var number2 = prompt(`enter second integer \n`);

numberx = number1 % 10;

numberx == number2 % 10
  ? console.log(
      ` \nthe numbers ${number1} and ${number2} have same last digit ${numberx}`
    )
  : console.log(
      ` \nthe numbers ${number1} and ${number2} does't have same last digit `
    );
