/*

* * *
* * *
* * *

*/

var prompt = require("prompt-sync")();

var limit = prompt("enter number of lines");

square = "";
for (i = 0; i < limit; i++) {
  for (j = 0; j < limit; j++) {
    square += "* ";
  }
  square += "\n";
}
console.log(square);
