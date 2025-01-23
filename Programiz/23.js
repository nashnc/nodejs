/* 
JavaScript Program to Find HCF or GCD 
*/

var prompt = require("prompt-sync")();

var number1 = prompt("enter first  integer \n");
var number2 = prompt(`enter second integer \n`);

while (number1 != number2) {
  number1 < number2 ? (number2 -= number1) : (number1 -= number2);
}
console.log(number1);
