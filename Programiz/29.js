/**fibanacci using recussion */

var input = require("prompt-sync")();
var number = parseInt(input(`enter a random number`));

total = 1;
console.log(total);

function fibanacci(number) {
 

  total = prev + number;
  console.log(total);
  if (number > 0) {
    return fibanacci(number - 1);
  }
}
fibanacci(number);
