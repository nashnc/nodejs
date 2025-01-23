var prompt = require("prompt-sync")();

var limit = prompt(` enter a positive integer`);
pattern = "";

var i = 0;

while (i < limit) {
  var j = 0;
  while (j <= i) {
    pattern += "+ ";
    j++;
  }
  pattern += "\n";
  i++;
}

console.log(pattern);
