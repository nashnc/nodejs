var prompt = require("prompt-sync")();

var size = prompt(` enter the size of the  triangle\n`);
pattern = "";

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (j < size - i - 1) {
      pattern += "  ";
    } else {
      pattern += "* ";
    }
  }
  for (k = 0; k < i; k++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
