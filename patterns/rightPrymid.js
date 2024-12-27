var prompt = require("prompt-sync")();

var size = prompt(` enter the size of the  triangle\n`);
pattern = "";

for (i = 0; i < size; i++) {
  for (j = 0; j < i; j++) {
    if (j < size - i - 1) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }

  pattern += "\n";
}
console.log(pattern);
