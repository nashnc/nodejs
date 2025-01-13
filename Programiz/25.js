/***
  fators of number
 * 
 */

var prompt = require("prompt-sync")();

var number = prompt(`enter the number`);
i = 1;
while (i <= number) {
  if (number % i == 0) {
    console.log(i);
  }
  i++;
}
