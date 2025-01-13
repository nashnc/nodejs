/**JavaScript Program to Find Sum of Natural Numbers Using Recursion */

var alert = require("prompt-sync")();

var number = alert(`enter the numebr`);
number = parseInt(number);
function sum(num) {
  if (num == 0) {
    return num;
  }
  return parseInt(num + sum(num - 1));
}

output = sum(number);
console.log(output);
