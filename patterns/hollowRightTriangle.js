var prompt = require("prompt-sync")();

var size = prompt(` enter the size of the hollow triangle\n`);
pattern = "";

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i == size - 1 || i == size - j - 1 || j == size - 1) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
