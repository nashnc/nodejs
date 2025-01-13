var prompt = require("prompt-sync")();

var number = prompt(` enter a positive integer`);
pattern = "";

for (i = 0; i < number; i++) {
  for (j = 0; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
